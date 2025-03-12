import { Skeleton } from "@mui/material";

const SkeletonList = () => {
     return (
          <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-5 h-full pb-20 xs:grid-cols-2 lmd:grid-cols-3 xl:grid-cols-4">
               {
                    /* array of 6 skeletons */
                    Array.from({ length: 8 }).map((_, index) => {
                         return (
                              <Skeleton
                                   height={"auto"}
                                   width={"100%"}
                                   key={index}
                                   sx={{
                                        width: "100%",
                                        height: "auto",
                                        borderRadius: "8px",
                                        aspectRatio: "334/376",
                                        padding: "0",
                                        margin: "0",
                                        transform: "none",
                                   }}
                              />
                         );
                    })
               }
          </div>
     );
};

export default SkeletonList;
