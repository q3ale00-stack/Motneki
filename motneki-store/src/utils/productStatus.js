export const normalizeProductStatus = (status) => status === 'out-of-stock' ? 'sold-out' : status;

export const isSoldOut = (productOrStatus) => {
  const status = typeof productOrStatus === 'string' ? productOrStatus : productOrStatus?.status;
  return normalizeProductStatus(status) === 'sold-out';
};
