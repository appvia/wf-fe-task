#!/bin/sh -e

exec nginx -g "daemon off;" -c "/nginxconf/http.conf"
