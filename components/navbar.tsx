import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import Image from "next/image";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b mr-2">
      <Container>
        <div className="relative px-0 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="flex">
            <Image
              src="/images/logo.png"
              alt="Buenled"
              width={140}
              height={140}
            >
            </Image>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
