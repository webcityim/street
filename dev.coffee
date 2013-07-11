
require('calabash').do 'dev',
  'pkill -f doodle'
  'jade -o ./ -wP layout/index.jade'
  'doodle index.html'