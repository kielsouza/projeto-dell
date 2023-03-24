
# Dell IT Academy Project
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/kielsouza/projeto-dell/blob/master/README.en-us.md)
[![en](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/kielsouza/projeto-dell/blob/master/README.md)

- This activity consists of developing a simulation for an interstate freight transportation system.
- The distance data between cities are available in the attached CSV file. 
- In this file, the first line contains the names of the cities where the transports take place; the other lines of the file are a matrix of distances between the respective cities.
- The transportation company Dely has its fleet composed of trucks of different sizes: a small-sized truck model transports up to 1 ton and costs R$4.87 per km driven; a medium-sized truck transports up to 4 tons and costs R$11.92 per km driven; and a large-sized truck transports up to 10 tons and costs R$27.44 per km driven.
- In the table below, the cost per km is available for each mode of transport.

| Items | Price per Km (R$/km) |
| :---: | :----: |
| Small truck | 4.87 | 4.87
| Medium Size Truck - 11.92
| Large Truck 37.44

#### Note: for this activity, the dimensions of the transported products should be ignored, only their weights are relevant.

- In the table below are available some transport items, just as an example.

| Items | Weight (kg) |
| :---: | :----: |
| Cell Phone 0.5 | 0.5 |
| Refrigerator 60.0
| Freezer 100.0
| Chair 5.0
| Lighting 0.8
| Washing Machine | 120 |


## Features

### 1 - [Consult excerpts x mode
- The program should represent in text or graphic mode the available routes for transportation, allowing the user to indicate the name of two cities and the transportation modality: the program should show the distance between them and the total cost calculated for the route; if a city name doesn't exist, inform the user;
- For example: from PORTO ALEGRE to SÃO PAULO, using a small truck, the distance is XXX km and the cost will be R$ xxx,00.

### 2 - [Register transport]
- The program should allow the user to list a sequence of cities and add a list of items to be transported (and their weights).
- The program should calculate the total distance to be traveled and identify the most appropriate truck model for this transport, as well as the costs involved (per stretch and total).
- For example: from PORTO ALEGRE to SÃO PAULO, the distance to be traveled is X km, to transport products X, Y, Z it will be necessary to use 2 SMALL trucks and one MEDIUM truck, so as to result in the lowest transportation cost per km. The total value of the transportation of the items is R$ xxx,00, where R$ xxx,00 is the average unit cost.

### To accomplish this question, consider the following example scenarios:

#### Scenario 1:
TikStop company wishes to transport the total of 300 cell phones, 50 refrigerators, 70 freezers, and 2000 light fixtures. The transportation will depart from the city of Porto Alegre, with a stop in Florianopolis where 25 refrigerators, 50 freezers and 100 cell phones will be unloaded. The rest of the cargo will continue to the city of Curitiba.

#### Scenario 2:
LeMour company wishes to transport the total of 500 cell phones, 100 refrigerators, 200 freezers, 98 chairs. The transport will depart from the city of Maceió, stopping in Goiânia where 90 refrigerators, 200 freezers and 20 cell phones will be unloaded. The rest of the cargo will continue to São Paulo.

##### Note: for some usage scenarios it may be necessary to allocate more than one truck to handle the cargo.
    
### 3 - [Statistical data]
- The program should display a report of the transports registered so far.
- For each one the total cost, the cost per route, the average cost per km, the average cost per product type, the total cost per route, the total cost for each mode of transport, the total number of vehicles moved and the total number of items transported should be presented. 

### 4 - [End the program]
- The program should allow the user to end the program at any time.

### Final Remarks:

1. You can display the requested information in any way you find most convenient and useful, using characters, symbols, numbers, spaces, graphical interface, web pages, etc. Use your creativity and show what you know!

2. It is suggested that you develop a program in the language of your choice, with an interface of your choice that can be graphic or textual/console, with a menu with the options listed in the requirements;

3. You must write the code that performs the required functions and stores the read data in memory (the way you want). 

4. You do not need to write data in any format, or use database systems.

5. The program should handle invalid input data and report an appropriate message if they occur. Remember to demonstrate this in the screenshots when you run the tests.
    


Translated with www.DeepL.com/Translator (free version)
