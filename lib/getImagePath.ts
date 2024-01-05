// the below is basically a if else condition where if the link is not present it will add this default  path at the start https://links.papareact.com/o8z
//  if image path is  there it will not do anything

// see from 1hr 43 mins if u have a dobt on this

const getImagePath = (imagePath?: string, fullSize?: boolean) => {
  return imagePath
    ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
    : "https://links.papareact.com/o8z";
};

export default getImagePath;