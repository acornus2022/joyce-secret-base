<!-- @format -->

# nginx config file

/etc/nginx/nginx.conf

# reload nginx config file

nginx -s <SIGNAL>
where <SIGNAL> can be one of the following:

quit – Shut down gracefully
reload – Reload the configuration file
reopen – Reopen log files
stop – Shut down immediately (fast shutdown)

# firebase

https://www.educative.io/edpresso/firebase-as-simple-database-to-react-app

# check and close port

sudo lsof -i :8080
kill -9 25896
