""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Vundle
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'

" Add plugin here

Plugin 'itchyny/lightline.vim'
Plugin 'lervag/vimtex'
Plugin 'KeitaNakamura/tex-conceal.vim'

" Color
"Plugin 'drewtempelmeyer/palenight.vim'
"Plugin 'joshdick/onedark.vim'
"Plugin 'tyrannicaltoucan/vim-deep-space'
"Plugin 'rakr/vim-one'
"Plugin 'arcticicestudio/nord-vim'
Plugin 'vim-scripts/peaksea'




" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line



""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Vimrc Example
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""


" An example for a vimrc file.
"
" Maintainer:	Bram Moolenaar <Bram@vim.org>
" Last change:	2017 Sep 20
"
" To use it, copy it to
"     for Unix and OS/2:  ~/.vimrc
"	      for Amiga:  s:.vimrc
"  for MS-DOS and Win32:  $VIM\_vimrc
"	    for OpenVMS:  sys$login:.vimrc

" When started as "evim", evim.vim will already have done these settings.
if v:progname =~? "evim"
  finish
endif

" Get the defaults that most users want.
source $VIMRUNTIME/defaults.vim

if has("vms")
  set nobackup		" do not keep a backup file, use versions instead
else
  set backup		" keep a backup file (restore to previous version)
  if has('persistent_undo')
    set undofile	" keep an undo file (undo changes after closing)
  endif
endif

if &t_Co > 2 || has("gui_running")
  " Switch on highlighting the last used search pattern.
  set hlsearch
endif

" Only do this part when compiled with support for autocommands.
if has("autocmd")

  " Put these in an autocmd group, so that we can delete them easily.
  augroup vimrcEx
  au!

  " For all text files set 'textwidth' to 78 characters.
  autocmd FileType text setlocal textwidth=78

  augroup END

else

  set autoindent		" always set autoindenting on

endif " has("autocmd")

" Add optional packages.
"
" The matchit plugin makes the % command work better, but it is not backwards
" compatible.
" The ! means the package won't be loaded right away but when plugins are
" loaded during initialization.
if has('syntax') && has('eval')
  packadd! matchit
endif


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" User Conf
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""


" Set

syntax on                   " Syntax highlighting
filetype plugin indent on   " Indentation rules for different file types
set nu                      " To turn on line numbers
set autoread                " Set to auto read when a file is changed from the outside
set wildmenu                " Turn on the Wild menu
set ruler                   " Always show current position
set cmdheight=1             " Height of the command bar
set hid                     " A buffer becomes hidden when it is abandoned
set magic                   " For regular expressions turn magic on
set showmatch               " Show matching brackets when text indicator is over them
set mat=2                   " How many tenths of a second to blink when matching brackets
set encoding=utf8           " Set utf8 as standard encoding and en_US as the standard language
set ffs=unix,dos,mac        " Use Unix as the standard file type

set ttymouse=xterm2         "allouse mouse in tmux
set mouse=a

" Search
set ignorecase              " Ignore case when searching
set smartcase               " When searching try to be smart about cases 
set hlsearch                " Highlight search results
set incsearch               " Makes search act like search in modern browsers



" tabs
set expandtab     " Uses spaces instead of tabs
set tabstop=4     " Each tab is 4 spaces
set shiftwidth=4
set smarttab
set lbr           " Linebreak on 500 characters
set tw=500
set ai "Auto indent
set si "Smart indent
set wrap "Wrap lines



" Style
set background=dark
set termguicolors
colorscheme peaksea 
hi Normal guibg=NONE ctermbg=NONE
hi NonText guibg=NONE ctermbg=NONE

"hi Folded     guifg=NONE  guibg=NONE   gui=NONE
"hi FoldColumn     guifg=NONE    guibg=NONE   gui=NONE
"set foldcolumn=1

" No annoying sound on errors
set belloff=all
set noerrorbells
set novisualbell
set t_vb=
set tm=500
" Properly disable sound on errors on MacVim
if has("gui_macvim")
    autocmd GUIEnter * set vb t_vb=
endif


" Set extra options when running in GUI mode
if has("gui_running")
    set guioptions-=T
    set guioptions-=e
    set t_Co=256
    set guitablabel=%M\ %t
endif


" Turn backup off, since most stuff is in SVN, git et.c anyway...
set nobackup
set nowb
set noswapfile


""""""""""""""""""""""""""""""
" => Status line
""""""""""""""""""""""""""""""
" Always show the status line
set laststatus=2

" Format the status line
set statusline=\ %{HasPaste()}%F%m%r%h\ %w\ \ CWD:\ %r%{getcwd()}%h\ \ \ Line:\ %l\ \ Column:\ %c


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => lightline
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set noshowmode

let g:lightline = {
      \ 'colorscheme': 'wombat',
      \ }

let g:lightline = {
      \ 'colorscheme': 'wombat',
      \ 'active': {
      \   'left': [ ['mode', 'paste'],
      \             ['fugitive', 'readonly', 'filename', 'modified'] ],
      \   'right': [ [ 'lineinfo' ], ['percent'] ]
      \ },
      \ 'component': {
      \   'readonly': '%{&filetype=="help"?"":&readonly?"🔒":""}',
      \   'modified': '%{&filetype=="help"?"":&modified?"+":&modifiable?"":"-"}',
      \   'fugitive': '%{exists("*fugitive#head")?fugitive#head():""}'
      \ },
      \ 'component_visible_condition': {
      \   'readonly': '(&filetype!="help"&& &readonly)',
      \   'modified': '(&filetype!="help"&&(&modified||!&modifiable))',
      \   'fugitive': '(exists("*fugitive#head") && ""!=fugitive#head())'
      \ },
      \ 'separator': { 'left': ' ', 'right': ' ' },
      \ 'subseparator': { 'left': ' ', 'right': ' ' }
      \ }

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => vimtex
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"let g:vimtex_complete_bib={'simple': 0, 'recursive': 1, 'abbr_fmt': '', 'custom_patterns': [], 'menu_fmt': '[@type] @author_short (@year), "@title"'}
let g:tex_flavor='latex'
let g:vimtex_view_method='zathura'
let g:vimtex_quickfix_mode=0
set conceallevel=1
let g:tex_conceal='abdmg'
highlight Conceal guibg=NONE


if empty(v:servername) && exists('*remote_startserver')
   call remote_startserver('VIM')
   endif

setlocal spell
set spelllang=en_us
inoremap <C-l> <c-g>u<Esc>[s1z=`]a<c-g>u
hi SpellBad cterm=underline
