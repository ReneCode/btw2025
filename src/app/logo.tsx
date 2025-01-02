export default function Logo({ logo }: { logo: string }) {
  return (
    <div className="logo">
      <img src={logo} alt="logo" width="90" />
    </div>
  );
}
