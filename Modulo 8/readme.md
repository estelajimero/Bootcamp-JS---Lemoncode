El objetivo del laboratorio de este módulo es dividir la funcionalidad de una aplicación en varios ficheros. La aplicación muestra en un documento HTML un listado de clientes de un banco, con sus cuentas (saldo y número IBAN).

La aplicación de partida viene ya creada, y sólo se compone de dos ficheros: HTML (index.html) y Javascript (index.js). Debemos romper el fichero index.js en varios, agrupando por funcionalidad.

Tendremos que tener al finalizar el laboratorio los siguientes ficheros javascript:

    account-business.js
    client-business.js
    client-list-business.js
    data-business.js
    index.js
    style-business.js

Además, el fichero index.html solo importará con la etiqueta script a index.js.

En el propio fichero index.js están separadas las funciones por comentarios para saber en qué fichero hay que colocarlas:

    account-business.js: -- getClientAccountsElement -- getAccountElement
    client-business.js: -- getClientElement -- getClientNode -- getFullName
    client-list-business.js: -- printClientsAccounts
    data-business.js: -- getAccounts -- getClients
    style-business.js: -- getNodeStyle

El fichero index.js terminará sólo con el siguiente contenido, más los imports que necesite:

    window.onload = function() {
    printClientsAccounts();
    };

Para completar el laboratorio con la entrega obligatoria, se deberá realizar el ejercicio descrito en alguna de las formas de separar ficheros vistas en el módulo. Para completar el laboratorio con ejercicio extra, se deberá entregar dos de las formas de separar funcionalidad en ficheros.

    Nota: si se van a importar los diferentes ficheros con las etiquetas script desde el documento html, se deberá implementar con Visual Studio Code. Para utilizar los módulos de CommonJS o ES6, se puede utilizar un CodeSandbox como se ha visto en la sesión práctica.

    ¡Reto!: montar el entorno de desarrollo y ejecución con NodeJS, npm y Parcel para realizar la entrega utilizando los módulos de CommonJS y/o ES6 funcionando en nuestro Visual Studio Code local.

La aplicación de partida está disponible en el siguiente CodeSandbox: bootcamp-lemoncode-mod8-lab - CodeSandbox, y el contenido de sus ficheros es el siguiente:

index.html

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Laboratorio Módulo 8</title>
    <script src="./src/index.js"></script>
  </head>
  <body>
    <h2>Lista de clientes y cuentas bancarias:</h2>
    <div id="root"></div>
  </body>
</html>

src/index.js

// index.js 

    window.onload = function() {
    printClientsAccounts();
    };

// client-list-business.js

    function printClientsAccounts() {
    const clients = getClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
        const element = getClientElement(client);
        ul.appendChild(element);
    }

    document.getElementById("root").appendChild(ul);
    }

// client-business.js

    function getClientElement(client) {
    const allAccounts = getAccounts();
    const clientAccounts = [];
    for (let account of allAccounts) {
        if (account.clientId === client.id) {
        clientAccounts.push(account);
        }
    }

    const node = getClientNode(client);
    const ul = getClientAccountsElement(clientAccounts);

    node.appendChild(ul);

    return node;
    }

    function getClientNode(client) {
    const li = document.createElement("li");
    li.append(getFullName(client));

    return li;
    }

    function getFullName(client) {
    return client.first_name + " " + client.last_name;
    }

// account-business.js

    function getClientAccountsElement(accounts) {
    const ul = document.createElement("ul");
    for (let account of accounts) {
        ul.append(getAccountElement(account));
    }
    return ul;
    }

    function getAccountElement(account) {
    const li = document.createElement("li");

    li.style = getNodeStyle(account);

    li.append("[Saldo: " + account.money + "] IBAN: " + account.iban);
    return li;
    }

// style-business.js

    function getNodeStyle(account) {
    if (account.money < 0) {
        return "color: red";
    }

    return "color: blue";
    }

// data-business.js

    function getClients() {
    return [
        {
        id: 1,
        avatar: "https://robohash.org/harumundedeleniti.jpg?size=50x50&set=set1",
        first_name: "Javier",
        last_name: "Lamey",
        email: "jlamey0@discuz.net"
        },
        {
        id: 2,
        avatar:
            "https://robohash.org/fugitvoluptatesenim.png?size=50x50&set=set1",
        first_name: "Crin",
        last_name: "Siberry",
        email: "csiberry1@lycos.com"
        },
        {
        id: 3,
        avatar: "https://robohash.org/quodquidemvero.jpg?size=50x50&set=set1",
        first_name: "Belva",
        last_name: "Dumbleton",
        email: "bdumbleton2@bloomberg.com"
        },
        {
        id: 4,
        avatar: "https://robohash.org/evenietanimimaxime.jpg?size=50x50&set=set1",
        first_name: "Natal",
        last_name: "Achromov",
        email: "nachromov3@hatena.ne.jp"
        },
        {
        id: 5,
        avatar: "https://robohash.org/eositaqueexplicabo.bmp?size=50x50&set=set1",
        first_name: "Brandy",
        last_name: "Iwaszkiewicz",
        email: "biwaszkiewicz4@goodreads.com"
        },
        {
        id: 6,
        avatar:
            "https://robohash.org/veritatisaliasminima.jpg?size=50x50&set=set1",
        first_name: "Rudolfo",
        last_name: "Squelch",
        email: "rsquelch5@stanford.edu"
        },
        {
        id: 7,
        avatar:
            "https://robohash.org/asperioresomnissoluta.bmp?size=50x50&set=set1",
        first_name: "Aurelie",
        last_name: "Flye",
        email: "aflye6@amazon.de"
        },
        {
        id: 8,
        avatar:
            "https://robohash.org/veritatisfacereeligendi.png?size=50x50&set=set1",
        first_name: "Dollie",
        last_name: "Durdy",
        email: "ddurdy7@privacy.gov.au"
        },
        {
        id: 9,
        avatar: "https://robohash.org/molestiaeutaliquam.jpg?size=50x50&set=set1",
        first_name: "Sadie",
        last_name: "Carsey",
        email: "scarsey8@free.fr"
        },
        {
        id: 10,
        avatar: "https://robohash.org/asperioresdolorsit.png?size=50x50&set=set1",
        first_name: "Franny",
        last_name: "Breazeall",
        email: "fbreazeall9@msu.edu"
        }
    ];
    }

    function getAccounts() {
    return [
        {
        id: 1,
        clientId: 1,
        iban: "CZ93 1843 7812 7148 7249 2819",
        money: "-1345.10"
        },
        {
        id: 2,
        clientId: 1,
        iban: "FR39 8986 1940 69E5 IPIX 74QN G61",
        money: "-1418.10"
        },
        {
        id: 3,
        clientId: 2,
        iban: "TN31 0683 5990 1113 0051 7844",
        money: "23109.78"
        },
        {
        id: 4,
        clientId: 3,
        iban: "GB98 UTTC 8356 6258 9439 93",
        money: "15721.47"
        },
        {
        id: 5,
        clientId: 4,
        iban: "BG17 VAKO 7833 79Q7 HK7H K3",
        money: "24458.62"
        },
        {
        id: 6,
        clientId: 5,
        iban: "MU93 QUGI 8684 7689 7519 5635 274U LC",
        money: "23677.60"
        },
        {
        id: 7,
        clientId: 5,
        iban: "FR43 9528 3177 35O3 AC2V 6VNU V38",
        money: "11117.60"
        },
        {
        id: 8,
        clientId: 6,
        iban: "NL35 BLZT 2522 8993 25",
        money: "207.32"
        },
        {
        id: 9,
        clientId: 7,
        iban: "AZ25 TSQE CULI 0YGX AJK3 RCHX DSZ2",
        money: "23980.98"
        },
        {
        id: 10,
        clientId: 8,
        iban: "FR16 3581 3360 133P CCCZ EW3E A20",
        money: "15230.37"
        },
        {
        id: 11,
        clientId: 8,
        iban: "MK98 081B IAUU CTEF 308",
        money: "19166.62"
        },
        {
        id: 12,
        clientId: 8,
        iban: "LB91 1234 KKW8 W2EY 972B EXVO YKN0",
        money: "-2396.78"
        },
        {
        id: 13,
        clientId: 9,
        iban: "BG83 RKKJ 5762 9795 AH74 9Y",
        money: "11837.06"
        },
        {
        id: 14,
        clientId: 9,
        iban: "HU46 6405 3103 5188 8345 6947 6173",
        money: "-6081.25"
        },
        {
        id: 15,
        clientId: 10,
        iban: "FR59 2396 3586 44UT 2E5F DQAB P15",
        money: "24426.40"
        }
    ];
    }
