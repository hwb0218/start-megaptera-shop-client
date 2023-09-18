import styled from 'styled-components';

const Container = styled.div`
  li {
    min-height: 1rem;
    line-height: 1.4;
  }
`;

type DescriptionProps = {
  value: string;
}

export default function Description({ value }: DescriptionProps) {
  if (!value.trim()) {
    return null;
  }

  const lines = value.split('\n');

  return (
    <Container>
      <ul>
        {lines.map((line, index) => {
          const key = `${index}-${line}`;
          return <li key={key}>{line}</li>;
        })}
      </ul>
    </Container>
  );
}
