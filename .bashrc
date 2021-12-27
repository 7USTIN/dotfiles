#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
PS1='\W $ '
alias c="clear"
alias bs="sudo nvim ~/.config/bspwm/bspwmrc"
alias sx="sudo nvim ~/.config/sxhkd/sxhkdrc"
alias ba="sudo nvim ~/.bashrc"
alias xi="sudo nvim ~/.xinitrc"
alias ki="sudo nvim ~/.config/kitty/kitty.conf"
alias po="sudo nvim ~/.config/polybar/config"
alias pi="sudo nvim ~/.config/picom/picom.conf"

pfetch
