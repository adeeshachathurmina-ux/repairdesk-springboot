import { useState } from "react";

const sampleRepairs = [
  {
    id: "RD-1001",
    customer: "Nimal Perera",
    device: "Dell Laptop",
    problem: "Not powering on",
    technician: "Kasun",
    status: "Under Inspection",
  },
  {
    id: "RD-1002",
    customer: "Shani Silva",
    device: "Samsung Phone",
    problem: "Broken display",
    technician: "Amal",
    status: "Waiting Approval",
  },
  {
    id: "RD-1003",
    customer: "Ruwan Dias",
    device: "Washing Machine",
    problem: "Water leak",
    technician: "Dinuka",
    status: "Completed",
  },
];

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [repairs, setRepairs] = useState(sampleRepairs);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    customer: "",
    device: "",
    problem: "",
    technician: "",
  });

  function login(event) {
    event.preventDefault();
    setLoggedIn(true);
  }

  function addRepair(event) {
    event.preventDefault();

    const newRepair = {
      id: `RD-${1001 + repairs.length}`,
      ...form,
      status: "Requested",
    };

    setRepairs([newRepair, ...repairs]);
    setForm({
      customer: "",
      device: "",
      problem: "",
      technician: "",
    });
    setShowForm(false);
  }

  const filteredRepairs = repairs.filter((repair) =>
    `${repair.customer} ${repair.device} ${repair.problem}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (!loggedIn) {
    return (
      <div style={styles.loginPage}>
        <div style={styles.loginCard}>
          <h2>
            RepairDesk <span style={styles.green}>LK</span>
          </h2>

          <h1>Welcome back</h1>
          <p>Manage repairs with clarity, accountability and smarter decisions.</p>

          <form onSubmit={login}>
            <label>Email</label>
            <input
              style={styles.input}
              type="email"
              defaultValue="customer@repairdesk.lk"
              required
            />

            <label>Password</label>
            <input
              style={styles.input}
              type="password"
              defaultValue="demo123"
              required
            />

            <button style={styles.primaryButton} type="submit">
              Sign in to Demo
            </button>
          </form>

          <p style={styles.demoText}>
            Portfolio Demo Mode: Any valid email and password can be used.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <aside style={styles.sidebar}>
        <h2>
          RepairDesk <span style={styles.green}>LK</span>
        </h2>

        <p style={styles.activeMenu}>Dashboard</p>
        <p>Repair Requests</p>
        <p>Customers</p>
        <p>Technicians</p>
        <p>Quotations</p>
        <p>Invoices</p>
        <p>Warranty</p>
        <p>Reports</p>

        <button
          style={styles.logoutButton}
          onClick={() => setLoggedIn(false)}
        >
          Log out
        </button>
      </aside>

      <main style={styles.main}>
        <div style={styles.header}>
          <div>
            <h1>Repair Dashboard</h1>
            <p>Manage repair requests from inspection to delivery.</p>
          </div>

          <button
            style={styles.primaryButton}
            onClick={() => setShowForm(true)}
          >
            + New Repair Request
          </button>
        </div>

        <section style={styles.cards}>
          <div style={styles.card}>
            <p>Total Requests</p>
            <h2>{repairs.length}</h2>
          </div>

          <div style={styles.card}>
            <p>Under Repair</p>
            <h2>1</h2>
          </div>

          <div style={styles.card}>
            <p>Waiting Approval</p>
            <h2>1</h2>
          </div>

          <div style={styles.card}>
            <p>Completed</p>
            <h2>1</h2>
          </div>
        </section>

        {showForm && (
          <section style={styles.panel}>
            <h2>Create Repair Request</h2>

            <form onSubmit={addRepair}>
              <input
                style={styles.input}
                placeholder="Customer name"
                value={form.customer}
                onChange={(event) =>
                  setForm({ ...form, customer: event.target.value })
                }
                required
              />

              <input
                style={styles.input}
                placeholder="Device or product"
                value={form.device}
                onChange={(event) =>
                  setForm({ ...form, device: event.target.value })
                }
                required
              />

              <input
                style={styles.input}
                placeholder="Problem description"
                value={form.problem}
                onChange={(event) =>
                  setForm({ ...form, problem: event.target.value })
                }
                required
              />

              <input
                style={styles.input}
                placeholder="Technician name"
                value={form.technician}
                onChange={(event) =>
                  setForm({ ...form, technician: event.target.value })
                }
                required
              />

              <button style={styles.primaryButton} type="submit">
                Save Request
              </button>

              <button
                style={styles.secondaryButton}
                type="button"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </form>
          </section>
        )}

        <section style={styles.panel}>
          <div style={styles.header}>
            <h2>Recent Repair Requests</h2>

            <input
              style={styles.search}
              placeholder="Search customer or device"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.cell}>Request ID</th>
                  <th style={styles.cell}>Customer</th>
                  <th style={styles.cell}>Device</th>
                  <th style={styles.cell}>Problem</th>
                  <th style={styles.cell}>Technician</th>
                  <th style={styles.cell}>Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredRepairs.map((repair) => (
                  <tr key={repair.id}>
                    <td style={styles.cell}>{repair.id}</td>
                    <td style={styles.cell}>{repair.customer}</td>
                    <td style={styles.cell}>{repair.device}</td>
                    <td style={styles.cell}>{repair.problem}</td>
                    <td style={styles.cell}>{repair.technician}</td>
                    <td style={styles.cell}>
                      <span style={styles.status}>{repair.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    background: "#f4f7fb",
    color: "#14213d",
    fontFamily: "Arial, sans-serif",
  },

  loginPage: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #eef3ff, #edfffa)",
    fontFamily: "Arial, sans-serif",
  },

  loginCard: {
    width: "420px",
    background: "white",
    padding: "35px",
    borderRadius: "18px",
    boxShadow: "0 15px 40px rgba(20, 33, 61, 0.15)",
  },

  green: {
    color: "#0d9b7e",
  },

  sidebar: {
    width: "230px",
    minHeight: "100vh",
    padding: "30px 22px",
    background: "#14213d",
    color: "white",
  },

  activeMenu: {
    padding: "12px",
    borderRadius: "8px",
    background: "#263859",
  },

  main: {
    flex: 1,
    padding: "30px",
    overflow: "auto",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
    gap: "18px",
    margin: "25px 0",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 18px rgba(20, 33, 61, 0.08)",
  },

  panel: {
    marginBottom: "20px",
    padding: "22px",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 5px 18px rgba(20, 33, 61, 0.08)",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    margin: "7px 0 16px",
    padding: "12px",
    border: "1px solid #ccd5e2",
    borderRadius: "8px",
  },

  search: {
    minWidth: "250px",
    padding: "11px",
    border: "1px solid #ccd5e2",
    borderRadius: "8px",
  },

  primaryButton: {
    padding: "12px 18px",
    border: "none",
    borderRadius: "8px",
    background: "#0d9b7e",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },

  secondaryButton: {
    marginLeft: "10px",
    padding: "12px 18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  logoutButton: {
    marginTop: "30px",
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  tableWrapper: {
    overflowX: "auto",
  },

  table: {
    width: "100%",
    marginTop: "15px",
    borderCollapse: "collapse",
  },

  cell: {
    padding: "13px",
    borderBottom: "1px solid #e8edf3",
    textAlign: "left",
  },

  status: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: "14px",
    background: "#dff8ef",
    color: "#087b60",
    fontSize: "12px",
  },

  demoText: {
    marginTop: "18px",
    color: "#69758c",
    fontSize: "13px",
  },
};
