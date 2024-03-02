export default function Footer() {
  const date = new Date();

  return <footer>©{date.getFullYear()}</footer>;
}
