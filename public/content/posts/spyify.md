---
---


## outline

- wanted an api
  - googled it
  - found the github issue (link)
- illdoitmyself.gif
  - installed fiddler
  - researched proxies
  - decided on mitmproxy (nice python lib)
  - implement features
- test
  - regrettably connected my account to facebook


## Steps

- looked at charles/wireshark/fiddler
  - chose fiddler, free and don't need the low level wireshark featueres for https
- looked around for a python http proxy that supported ssl - found [mitmproxy](https://github.com/mitmproxy/mitmproxy)

## To run
- install mitmproxy dependencies with:
```
sudo apt-get install python-pip python-dev libffi-dev libssl-dev libxml2-dev libxslt1-dev libjpeg8-dev zlib1g-dev
```
- pip install mitmproxy