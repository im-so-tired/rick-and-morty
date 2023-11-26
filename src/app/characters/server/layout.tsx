export default function CharactersLayout({
  children,
  characters
}: {
  children: React.ReactNode;
  characters: React.ReactNode;
}) {
  return (
    <>
      {children}
      {characters}
    </>
  );
}
