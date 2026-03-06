# Task — "User Overview Card"

Build a small User Overview Card in React that displays structured profile information based on the data below. The goal is to render the information exactly as shown in the expected output section.

[View the User Overview Card](http://localhost:5173/user-overview-card)
[Implementation](app/routes/user-overview-card.tsx)


## Data (must be used as-is)

```javascript
const user = {
  firstName: "Anna",
  lastName: "Jansen",
  age: 22,
  isStudent: true,
  hobbies: ["Reading", "Traveling", "Photography"],
  address: {
    city: "Antwerp",
    postalCode: 2000
  },
  accounts: [
    { type: "Checking", balance: 850.25 },
    { type: "Savings", balance: 500.25 }
  ]
};
```

## Required Rendered Output (exact content)

### USER PROFILE

**Full Name:** ANNA JANSEN  
**Location:** Antwerp (2000)

**Age Status:** Adult  
**Student:** Yes

**Accounts:**

- Checking: €850.25
- Savings: €500.25

**Total Balance:** €1350.50  
**Balance Status:** Positive

**Hobbies (3):**

- Reading
- Traveling
- Photography

**Profile Summary:**

Anna lives in Antwerp and has 3 hobbies and a total balance of €1350.50.
