const Index = () => {
  const { account } = window?.parent.context;
  return <>拿到了钱包地址：{account}</>;
};

export default Index;
