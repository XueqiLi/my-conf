var curTabId = -1

function getTask(tabId, callback) {
    var key = tabId + ''
    chrome.storage.local.get(key, function (items) {
        callback(items[key])
    })
}

function startTask(tabId, options, callback) {
    var key = tabId + ''
    var items = {}
    items[key] = options
    chrome.storage.local.set(items, function () {
        chrome.tabs.sendMessage(tabId, {type: "DISPATCH", options: options}, function (response) {
            callback && callback(response)
        })
    })

}

function stopTask(tabId, callback) {
    var key = tabId + ''
    chrome.storage.local.remove(key, function () {
        chrome.tabs.sendMessage(tabId, {type: "DISPATCH", options: {interval: -1}}, function (response) {
            callback && callback(response)
        })
    })
}

chrome.tabs.onActivated.addListener(function handleActivated(info) {
    curTabId = info.tabId
})

chrome.tabs.onRemoved.addListener(function handleRemoved(tabId) {
    chrome.storage.local.remove(tabId + '')
})

chrome.runtime.onMessage.addListener(function handleMessage(request, sender, sendResponse) {
    var tabId = (request.options && request.options.tabId) || (sender.tab && sender.tab.id)
    if (request.type === 'START' && tabId > 0) {
        startTask(tabId, request.options, function () {
            sendResponse('ok')
        })
        return true
    }
    if (request.type === 'STOP' && tabId > 0) {
        stopTask(tabId, function () {
            sendResponse('ok')
        })
        return true
    }
    if (request.type === 'QUERY' && sender.tab) {
        getTask(sender.tab.id, function (options) {
            sendResponse({options: options})
        })
        return true
    }
    if (request.type === 'BADGE' && sender.tab) {
        chrome.browserAction.setBadgeText({
            text: request.text + '',
            tabId: sender.tab.id
        })
        chrome.browserAction.setBadgeBackgroundColor({
            color: request.color,
            tabId: sender.tab.id
        })
        sendResponse('ok')
        return true
    }
    if (request.type === 'CLEAR_CACHE' && sender.tab) {
        chrome.browsingData.remove({since: 0}, { "cache": true }, function() {
            console.info('remove cache completed')
            sendResponse('ok')
        })
        return true
    }
    if (request.type === 'NOTIFY' && sender.tab) {
        if (!request.id) {
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'image/icon128.png',
                title: 'Free Auto Refresh',
                message: request.message
            }, function (nId) {
                sendResponse(nId)
            })
        } else {
            chrome.notifications.update(request.id, {
                type: 'basic',
                iconUrl: 'image/icon128.png',
                title: 'Free Auto Refresh',
                message: request.message
            }, function () {
                sendResponse(request.id)
            })
        }
        return true
    }
})