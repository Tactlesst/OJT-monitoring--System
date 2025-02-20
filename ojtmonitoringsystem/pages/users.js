export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/data&#39;');
    const users = await res.json();
    
    return { props: { users } };
    }
    
    export default function UsersPage({ users }) {
    return (
    <div>
    <h1>Users</h1>
    {users.map(user => (
    <p key={user.id}>{user.name}</p>
    ))}
    </div>
    );
    }