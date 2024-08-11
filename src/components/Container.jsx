const Container = ({ children }) => {
  return (
    <section className="container mx-auto px-3 sm:px-3 md:px-6 lg:px-14 xl:px-24">
      {children}
    </section>
  );
};

export default Container;
