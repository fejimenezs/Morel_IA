import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function Settings() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as Theme) || "light";

    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const applyTheme = (value: Theme) => {
    setTheme(value);
    localStorage.setItem("theme", value);
    document.body.className = value;
  };

  return (
    <div style={{ maxWidth: 720 }} className="p-4">
      <h3 className="fw-bold mb-4">⚙️ Configuración</h3>

      {/* TEMA */}
      <div className="card p-4 mb-4">
        <label className="fw-semibold mb-2">
          Tema de la aplicación
        </label>

        <select
          className="form-select"
          value={theme}
          onChange={(e) =>
            applyTheme(e.target.value as Theme)
          }
        >
          <option value="light">☀️ Claro</option>
          <option value="dark">🌙 Oscuro</option>
        </select>
      </div>

      {/* INFO */}
      <div className="card p-4">
        <p className="mb-0 text-muted">
          Los cambios se guardan automáticamente.
        </p>
      </div>
    </div>
  );
}
