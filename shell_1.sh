COUNT_HTTPD=$(ps ax | grep -v grep | grep -c httpd)
echo $COUNT_HTTPD
