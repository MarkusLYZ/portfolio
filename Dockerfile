FROM nginx

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom Nginx configuration file to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Copy your website files to the Nginx web root
COPY ./dist /usr/share/nginx/html

EXPOSE 80