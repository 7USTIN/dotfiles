vim.cmd [[
try
  colorscheme substrata
catch /^Vim\%((\a\+)\)\=:E185/
  colorscheme default
  set background=dark
endtry
]]
