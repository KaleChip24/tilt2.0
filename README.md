### Overview

***Tilt***

*Flip, Flip, Ding! Ding!*   
Tilt is a full CRUD app where users can add their faviorite pinball venues and the machinces that are availble to play. Users will have the ability to add the name and location of the venue along with the name, price-per-play and comments on the macines. 

<br>

### Wireframes
***

![here](https://res.cloudinary.com/dv2buktns/image/upload/v1643052551/Screen_Shot_2022-01-24_at_14.25.29_qerswd.png)

- Home

![here](https://res.cloudinary.com/dv2buktns/image/upload/v1643052550/Screen_Shot_2022-01-24_at_14.25.41_eksd5f.png)

- Venue Details

![here](https://res.cloudinary.com/dv2buktns/image/upload/v1643052550/Screen_Shot_2022-01-24_at_14.25.51_vs7hsh.png)

- Venue Detials (signed in)

![here](https://res.cloudinary.com/dv2buktns/image/upload/v1643052550/Screen_Shot_2022-01-24_at_14.26.58_s2uyyj.png)

- Add Venue

![here](https://res.cloudinary.com/dv2buktns/image/upload/v1643052549/Screen_Shot_2022-01-24_at_14.26.34_qjffg1.png)

- Edit Venue

![here](https://res.cloudinary.com/dv2buktns/image/upload/v1643052549/Screen_Shot_2022-01-24_at_14.26.45_qt7yia.png)

- Add Machine

![here](https://res.cloudinary.com/dv2buktns/image/upload/v1643052549/Screen_Shot_2022-01-24_at_14.27.32_va6eaq.png)

- Edit Machine


![here](https://res.cloudinary.com/dv2buktns/image/upload/v1643052549/Screen_Shot_2022-01-24_at_14.26.24_yprcev.png)

- SignUp

![here](https://res.cloudinary.com/dv2buktns/image/upload/v1643052549/Screen_Shot_2022-01-24_at_14.26.13_bvfomz.png)

- SignIn


<br>

#### Relationship Diagram
***

![](https://res.cloudinary.com/dv2buktns/image/upload/v1643052549/relationships_byg8ty.png)

<br>

#### Component Hierarchy
***

![](https://res.cloudinary.com/dv2buktns/image/upload/v1643058699/Screen_Shot_2022-01-24_at_15.58.29_nmfjgb.png)

<br>


#### Models

```

class Venue(models.Model):
    name = models.CharField(max_length=128)
    address = models.CharField(max_length=256)
    city = models.CharField(max_length=128)
    state = models.CharField(max_length=128)

    def __str__(self):
        return self.name


class Machine(models.Model):
    name = models.CharField(max_length=258)
    price = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    comments = models.CharField(max_length=256)
    venue = models.ForeignKey(
        Venue, on_delete=models.CASCADE, related_name='machines', null=True, blank=True)

    def __str__(self):
        return self.name


```

<br>

#### Endpoints

**All Venues**
```
{
        "id": 2,
        "name": "Jupiter Bar",
        "address": "2126 2nd Ave",
        "city": "Seattle",
        "state": "WA",
        "machines": [
            {
                "id": 3,
                "name": "Creature From the Black Lagoon",
                "price": "0.75",
                "comments": "Left flipper sticks from time to time",
                "venue": 2
            }
        ]
    },
    {
        "id": 3,
        "name": "Sunshine Laundromat",
        "address": "860 Manhattan Ave",
        "city": "Brooklyn",
        "state": "NY",
        "machines": [
            {
                "id": 2,
                "name": "Jurassic Park (Pro)",
                "price": "1.00",
                "comments": "Brand NEW!!",
                "venue": 3
            },
            {
                "id": 14,
                "name": "ACDA",
                "price": "0.50",
                "comments": "party like a rockstar",
                "venue": 3
            },
            {
                "id": 18,
                "name": "Midevil Madness",
                "price": "1.00",
                "comments": "Left flipper sticks from time to time",
                "venue": 3
            }

```

**Venues by ID**
```
{
    "id": 2,
    "name": "Jupiter Bar",
    "address": "2126 2nd Ave",
    "city": "Seattle",
    "state": "WA",
    "machines": [
        {
            "id": 3,
            "name": "Creature From the Black Lagoon",
            "price": "0.75",
            "comments": "Left flipper sticks from time to time",
            "venue": 2
        }
    ]
}
```

**All Machines**

```

    {
        "id": 3,
        "name": "Creature From the Black Lagoon",
        "price": "0.75",
        "comments": "Left flipper sticks from time to time",
        "venue": 2
    },
    {
        "id": 2,
        "name": "Jurassic Park (Pro)",
        "price": "1.00",
        "comments": "Brand NEW!!",
        "venue": 3
    },
    {
        "id": 4,
        "name": "Addams Family",
        "price": "0.75",
        "comments": "Thing's hand is out for repairs",
        "venue": 4
    },
    {
        "id": 8,
        "name": "Batman",
        "price": "1.00",
        "comments": "da na na na",
        "venue": 4
    },
```


### MVP
***

#### Client (Frontend)

## React
 - Have a working, interactive React app, built using npx create-react-app
 - Have at least 8 separate, rendered components in an organized and understandable React file structure
 - Utilize functional React components appropriately
 - Utilize state and props in your components efficiently
 - Use only React for DOM Manipulation
 - Detail Screen
 - Utilize React Router, for client-side routing
 - Demonstrate Full CRUD actions ( index, show, create, update, and delete ) on the front end.
 - Deploy the fully functional front-end via Surge or Netlify

 ## CSS
 - Be styled with your own CSS
 - Use CSS Grid for your website layout
 - Use media queries so your application looks correct for both desktop and mobile

 ***
 #### Server (Backend)
 - At least two entities with a relationship between them
 - Full CRUD operations on both entities (create, read, update, delete)
 - User authentication to prevent at least one entity from being edited publicly
 - Deploy the back-end via Heroku

<br>



### Dependencies
 - React Router
 - Django
 - Psycopg2-binary
 - Django Rest Framework
 - Gunicorn
 - Whitenoise
 - Python dotenv


<br>

***


### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.