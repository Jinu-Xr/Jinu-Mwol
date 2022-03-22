FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Jinu-Xr/Jinu-Mwol /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/Jinu-Xr/uploads

CMD ["node", "bot.js"]
