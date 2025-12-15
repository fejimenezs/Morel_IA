type Props = {
  name: string;
};

export default function Avatar({ name }: Props) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #2563eb, #38bdf8)",
        color: "white",
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {initial}
    </div>
  );
}
