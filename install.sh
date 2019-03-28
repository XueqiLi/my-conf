#!/bin/bash

echo "Setting up"

# VIM
echo "Config: VIM..."
cp vim/vimrc ~/.vimrc
cp vim/vim/colors/peaksea.vim ~/.vim/colors/
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
vim +PluginInstall +qall
echo "Config: VIM - Done"
