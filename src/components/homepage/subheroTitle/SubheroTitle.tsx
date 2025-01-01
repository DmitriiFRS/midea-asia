import Container from "@/components/common/container/Container";

interface Props {
  locale: string;
}

const SubheroTitle: React.FC<Props> = ({ locale }) => {
  return (
    <Container className="max-w-[600px] mt-[100px]">
      <p className="text-center leading-130% text-[20px] font-medium tracking-wide">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta architecto obcaecati ipsum nostrum magni dicta
        repellendus exercitationem qui numquam officia fugiat animi, voluptatum, accusantium adipisci earum ut hic, nesciunt odio!
      </p>
    </Container>
  );
};

export default SubheroTitle;
