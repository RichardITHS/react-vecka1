# React vecka 1

Välkommen till Fullstack kursen 2023!


Installation:
Det finns 2 st metoder att installera React på:

1.

Via att skriva i terminalen "npx create-react-app my-project" (my-project är bara ett namn, kan ändras till vadsomhelst)
Här använder vi oss av Reacts egna installation.
I denna ingår det mesta för att kunna arbeta men installationen är långsam och eventuella
ändringar tar en liten stund

2.

Via att skriva i terminalen "npm create vite".
Därefter följa installationsanvisningarna.
Välj:
- React
- Javascript

Här finns en bra guide, följ gärna denna:
https://www.digitalocean.com/community/tutorials/how-to-set-up-a-react-project-with-vite

//Interpolering
Skrivs {} och ej som i vue "{{}}"
Data som inhämtas kommer från en variabel eller en funktion med en return

//Komponenter
Precis som i Vue eller andra ramverk så byggs "app" upp av flera komponenter
Det finns 2 komponent typer:
- Functional Components (skrivs som en vanlig funktion med return)
- Class Components (använd render())

//Props vs State
Props är objekt som innehåller information för att kontrollera beteendet hos en komponent
Problemet med props är att de är oföränderliga
State(tillståndet) är också ett objekt som innehåller viss information som kan ändras under komponentens livstid

Props:
- Skickas till komponenten
- Props är oföränderliga
- Props kan nås som "rekvisita" eller "this.props"
- De är som parametrar som skickas till en funktion

State:
- Ingår i komponenten
- State kan ändras
- Funktionell: "useState" Hook
- Class: "this.state"
- De är som variabler som deklareras i "bodyn"



Events:
Vad som menas med Event har ni nu redan koll på från Native JS och Vue kursen.
