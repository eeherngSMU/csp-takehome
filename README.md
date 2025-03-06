
CASE STUDY 1:

We cannot edit user's variables by accessing their variables directly. e.g. user.age

React will not detect this change

React works by detecting if there are changes to the object reference

Thus we have to pass a completely new object to setUser

we can do so by getting all existing properties of the current object using spread operator while making sure to pass the updated age,
 and return it as a completely new object

```javascript
      const updateAge = () => {
        setUser((user) => ({
            ...user,
            age: 26,
        }))
      };
```


CASE STUDY 2:


Similar to case study 1, we are attempting to change the variable of an object directly

we have to pass a completely new array into updateUser

we can use map to iterate through the existing array

and when we reach the correct object, we edit the object

and when we return the new array, it will contain the updated object

To iterate through an 

```javascript

    const updateUser = (id, newName) => {
      setUsers((users) => users.map(
        (user) => {
            if(user.id === id) {
                return {
                    ...user,
                    name: newName,
                }
            } else {
                return user;
            }
        }

      ))
    };
```


CASE STUDY 3:


Delete function:

I made use of the fact that when we dynamically populate the editable inputs, i also added a delete button and assigned the id to it

When we click the delete button, it runs a deleteUser function, passing in the id, and thus removing the user with the id from users




Prerequisites

Make sure you have the following installed:
- Node.js (v18+) → [Download here](https://nodejs.org/)
- npm (comes with Node.js) OR yarn (alternative package manager)

---

Installation & Running the App

1️⃣ Clone the Repository

git clone https://github.com/eeherngSMU/csp-takehome.git
cd case-study-3/web-app


2️⃣ Install Dependencies
Using npm:

npm install

OR using yarn:

yarn install


3️⃣ Run the Development Server
Using npm:

npm run dev

OR using yarn:

yarn dev



The app will be available at http://localhost:3000.




