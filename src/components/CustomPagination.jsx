import { Pagination } from "flowbite-react"
import Skeleton from "./Skeleton"

const CustomPagination = ({isLoading, currentPage, onPageChange, getTotalPages}) => {
  return (
    <div className="custom-pagination">
          <hr className="mt-8 mb-8" />
          <div className="flex justify-center">
            {isLoading ? (
              <div className="w-[400px] max-lg:w-full">
                <Skeleton height="38px" />
              </div>
            ) : (
              <Pagination
                className="text-center"
                currentPage={currentPage}
                onPageChange={onPageChange}
                showIcons={true}
                totalPages={getTotalPages}
              />
            )}
          </div>
        </div>
  )
}

export default CustomPagination
