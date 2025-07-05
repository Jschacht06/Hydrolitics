# Hydrolitics - A smart and scalable water level sensing system

## The Initial Idea.
I have 4 large containers holding water and i would like to know how much water is in them without having to open them, by just simply looking on my phone/pc. I had the idea to just mount 4 JSN-SR04T sensors (1 in each container) inside the container facing down and these sensors can tell me how much water is inside of them. These would be connected to an ESP32 which will convert the values into something that tells us how much water is inside the pit. This would then send those values over an API to a website that can be deployed locally. This site would feature a login page and then a dashboard where you will be able to see how much water is inside each pit. 

This seems like a scalable system but mostly a fun way to learn a lot about API's, databases... Everything about backend development where i currently have none to little experience in.




## FAQ
### Q: Couldnt you also do this with Home-Assistant?
### A: Yes and it would be a lot easier but i built this project to learn a about full stack web development.

### Q: How much does this cost?
### A: Currently im at €23,50, this price is for the ESP32 + 4 JSN-SR04T sensors. I assume this price wont become much higher since the rest of this project is mostly software related. The only extra cost will be a housing that i will 3d print for each sensor with a way to mount it.



