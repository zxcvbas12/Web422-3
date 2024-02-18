import { useRouter } from "next/router";
import useSWR from "swr";
import ListingDetails from "@/components/ListingDetails";
import Error from "next/error";
import PageHeader from "@/components/PageHeader";

export default function Listing() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(
    `https://ruby-gharial-boot.cyclic.app/api/listings/${id}`
  );

  if (isLoading) {
    return null;
  } else {
    if (error) {
      return (
        <>
          <Error statusCode={404} />
        </>
      );
    } else {
      return (
        <>
          <PageHeader text={data.name} />
          <ListingDetails listing={data} />
        </>
      );
    }
  }
}
