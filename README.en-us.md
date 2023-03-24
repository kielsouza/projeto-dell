# Dell IT Academy project

- This activity consists of developing a simulation for an interstate freight transport system.
- Distance data between cities is available in the attached CSV file.
- In this file, the first line contains the names of the cities where transports take place; the remaining lines of the file constitute a matrix of distances between the respective cities.
- The carrier Dely has a fleet composed of trucks of different sizes: a small truck model transports up to 1 ton and has a cost of R$ 4.87 per km traveled; a medium-sized truck transports up to 4 tons and costs R$ 11.92 per km driven; and a large truck transports up to 10 tons and costs R$ 27.44 per km traveled.
- In the table below, the cost ratio per km is available for each mode of transport.

| Items | Price per km (R$/km) |
| :---: | :----: |
| Small Truck | 4.87 |
| Midsize Truck | 11.92 |
| Large Truck | 37.44 |

#### Note: for this activity, the dimensions of the transported products should be ignored, only their weights are relevant.

- In the table below some transport items are available, just as an example.

| Items | Weight (kg) |
| :---: | :----: |
| Mobile | 0.5 |
| Fridge | 60.0 |
| Freezer | 100.0 |
| Chair | 5.0 |
| Lamp | 0.8 |
| Clothes Washer | 120 |


## Functionalities

### 1 - [Consult excerpts x modality]
- The program should represent in text or graphic mode the sections available for carrying out the transport, in order to allow the user to indicate the name of two cities and the mode of transport: the program should show the road distance between them and the total cost calculated for the segment; if a city name does not exist, inform the user;
- For example: from PORTO ALEGRE to SÃO PAULO, using a small truck, the distance is XXX km and the cost will be R$ xxx.00.

### 2 - [Register transportation]
- The program should allow the user to list a sequence of cities and add a list of items to be transported (and their weights).
- The program should calculate the total distance to be traveled and identify the most suitable truck model for this transport, as well as the costs involved (per section and total).
- For example: from PORTO ALEGRE to SÃO PAULO, the distance to be traveled is X km, for the transport of products X, Y , Z it will be necessary to use 2 SMALL sized trucks and one MEDIUM sized truck, in order to result in the lowest transport cost per km driven. The total cost of transporting the items is BRL xxx.00, with BRL xxx.00 being the average unit cost.

### To accomplish this question, consider the following example scenarios:

#### Scene 1:
The company TikStop wants to transport a total of 300 cell phones, 50 refrigerators, 70 freezers and 2000 lamps. The transport will depart from the city of Porto Alegre, with a stop in Florianópolis where 25 refrigerators, 50 freezers and 100 cell phones will be unloaded. The rest of the cargo will go to the city of Curitiba.

#### Scenario 2:
The company LeMour wants to transport a total of 500 cell phones, 100 refrigerators, 200 freezers, 98 chairs. The transport will depart from the city of Maceió, with a stop in Goiânia where 90 refrigerators, 200 freezers and 20 cell phones will be unloaded. The remainder of the cargo will continue to São Paulo.

##### Note: for some usage scenarios it may be necessary to allocate more than one truck to handle the load.
    
### 3 - [Statistical data]
- The program should display a report of the transports registered until then.
- For each one, the total cost, the cost per stretch, the average cost per km, the average cost per type of product, the total cost per stretch, the total cost for each mode of transport, the total number of vehicles must be presented moved and the total number of items transported.

### 4 - [End the program]
- The program must allow the user to terminate the program at any time.

### Final remarks:

1. You can display the requested information in the way you find most convenient and useful, using characters, symbols, numbers, spaces, graphic interface, web pages, etc. Use creativity and show what you know!

2. We suggest the development of a program in the language of your preference, with an interface also of your preference, which can be graphical or textual/console, with a menu with the options listed in the requirements;

3. You must write code that performs the required functions and stores the read data in memory (the way you want it).

4. No need to write data in any format,