import Image from "next/image";

export default function Header() {
  return (
    <header>
      <nav>
        <a href="#">
          <Image
            src="/assents/images/logo.svg"
            alt="logo"
            width={50}
            height={50}
          />
        </a>
        <ul>
          <li>
            <a href="#">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Shop</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
