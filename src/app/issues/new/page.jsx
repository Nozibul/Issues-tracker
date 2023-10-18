import dynamic from "next/dynamic"
import IssueFormLoading from "./loading";

const IssueForm = dynamic(
  ()=> import('@/app/issues/components/IssueForm'),
  { 
    ssr: false ,
    loading: ()=> <IssueFormLoading />
  }
)

const NewIssuePage = async () => {
  return (
    <>
      <IssueForm />
    </>
  );
};

export default NewIssuePage;
