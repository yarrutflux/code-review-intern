const user = {
  firstName: "Anna",
  lastName: "Jansen",
  age: 22,
  isStudent: true,
  hobbies: ["Reading", "Traveling", "Photography"],
  address: {
    city: "Antwerp",
    postalCode: 2000,
  },
  accounts: [
    { type: "Checking", balance: 850.25 },
    { type: "Savings", balance: 500.25 },
  ],
};

export default function UserOverview() {

  const fullName = `${user.firstName} ${user.lastName}`;
  const ageStatus = user.age >= 18 ? "Adult" : "Minor";
  const isStudent = user.isStudent ? "Yes" : "No";
  const totalBalance = user.accounts.reduce((sum, account) => sum + account.balance, 0);
  const balanceStatus = totalBalance > 0 ? "Positive" : "Negative";

  return (
    <div>
        <section style={{ marginBottom: "24px" }}>
          <h1>USER PROFILE</h1>
        </section>
        
        <section style={{ marginBottom: "24px" }}>
          <h2>Full Name: {fullName}</h2>
          <h2>Location: {user.address.city + " " + user.address.postalCode}</h2>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <h2>Age Status: {ageStatus}</h2>
          <h2>Student: {isStudent}</h2>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <h2 style={{ marginBottom: "16px" }}>Accounts: </h2>
          <ul style={{ marginBottom: "16px" }}>
          {user.accounts.map((account) => (
            <li key={account.type} style={{ marginBottom: "6px" }}>
              - {account.type}: €{account.balance.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total Balance: €{totalBalance.toFixed(2)}</p>
        <p>Balance Status: {balanceStatus}</p>
      </section>

         <section style={{ marginBottom: "24px" }}>
        <p style={{ marginBottom: "16px" }}>Hobbies ({user.hobbies.length}):</p>
        <ul>
          {user.hobbies.map((hobby) => (
            <li key={hobby} style={{ marginBottom: "6px" }}> - {hobby}</li>
          ))}
        </ul>
      </section>

      <section>
        <p style={{ marginBottom: "16px" }}>Profile Summary:</p>
        <p>
          {user.firstName} lives in {user.address.city} and has {user.hobbies.length} hobbies and a total balance of €{totalBalance.toFixed(2)}.
        </p>
      </section>
      </div>
  );
}
