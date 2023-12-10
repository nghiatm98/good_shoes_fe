import { IMNew_1, IMNew_2, IMNew_3, IMNew_4, IMNew_5 } from 'assets'
import { Pagination } from 'components'
import type { NewModel } from 'models'
import { NewItem } from './NewItem'
import qs from 'query-string'
import { useMemo } from 'react'
import { NUMBER_OF_PAGE } from 'common'

const NEW_LIST: NewModel[] = [
  {
    image: IMNew_1,
    title: 'Anta sắp cho ra mắt sản phẩm mới...',
    description:
      'Thu hẹp khoảng cách giữa hoạt động tập luyện cuối tuần và ngày đua bằng một thiết kế bền bỉ có thể được triển khai không chỉ ở vạch xuất phát của cuộc đua yêu thích mà còn trong những ngày và tháng sau cuộc chinh phục của bạn. Nó mang lại sự thoải mái và tin cậy nhưng với cảm giác đẩy sẽ giúp bạn cảm thấy nhanh chóng và sảng khoái. Sự linh hoạt đó không phổ biến ở đấu trường chạy. Nhưng ai nói bạn không thể có tất cả?',
    time: 'Oct 26, 2023'
  },
  {
    image: IMNew_2,
    title: 'Adidas sắp cho ra mẫu boost mới...',
    description:
      'Thu hẹp khoảng cách giữa hoạt động tập luyện cuối tuần và ngày đua bằng một thiết kế bền bỉ có thể được triển khai không chỉ ở vạch xuất phát của cuộc đua yêu thích mà còn trong những ngày và tháng sau cuộc chinh phục của bạn. Nó mang lại sự thoải mái và tin cậy nhưng với cảm giác đẩy sẽ giúp bạn cảm thấy nhanh chóng và sảng khoái. Sự linh hoạt đó không phổ biến ở đấu trường chạy. Nhưng ai nói bạn không thể có tất cả?',
    time: 'Oct 26, 2023'
  },
  {
    image: IMNew_3,
    title: 'Puma sắp cho ra mắt sản phẩm giày...',
    description:
      'Thu hẹp khoảng cách giữa hoạt động tập luyện cuối tuần và ngày đua bằng một thiết kế bền bỉ có thể được triển khai không chỉ ở vạch xuất phát của cuộc đua yêu thích mà còn trong những ngày và tháng sau cuộc chinh phục của bạn. Nó mang lại sự thoải mái và tin cậy nhưng với cảm giác đẩy sẽ giúp bạn cảm thấy nhanh chóng và sảng khoái. Sự linh hoạt đó không phổ biến ở đấu trường chạy. Nhưng ai nói bạn không thể có tất cả?',
    time: 'Oct 26, 2023'
  },
  {
    image: IMNew_4,
    title: 'Anta sắp cho ra mắt sản phẩm mới...',
    description:
      'Thu hẹp khoảng cách giữa hoạt động tập luyện cuối tuần và ngày đua bằng một thiết kế bền bỉ có thể được triển khai không chỉ ở vạch xuất phát của cuộc đua yêu thích mà còn trong những ngày và tháng sau cuộc chinh phục của bạn. Nó mang lại sự thoải mái và tin cậy nhưng với cảm giác đẩy sẽ giúp bạn cảm thấy nhanh chóng và sảng khoái. Sự linh hoạt đó không phổ biến ở đấu trường chạy. Nhưng ai nói bạn không thể có tất cả?',
    time: 'Oct 26, 2023'
  },
  {
    image: IMNew_5,
    title: 'Adidas sắp cho ra mắt sản phẩm mới...',
    description:
      'Thu hẹp khoảng cách giữa hoạt động tập luyện cuối tuần và ngày đua bằng một thiết kế bền bỉ có thể được triển khai không chỉ ở vạch xuất phát của cuộc đua yêu thích mà còn trong những ngày và tháng sau cuộc chinh phục của bạn. Nó mang lại sự thoải mái và tin cậy nhưng với cảm giác đẩy sẽ giúp bạn cảm thấy nhanh chóng và sảng khoái. Sự linh hoạt đó không phổ biến ở đấu trường chạy. Nhưng ai nói bạn không thể có tất cả?',
    time: 'Oct 26, 2023'
  },
  {
    image: IMNew_1,
    title: 'Anta sắp cho ra mắt sản phẩm mới...',
    description:
      'Thu hẹp khoảng cách giữa hoạt động tập luyện cuối tuần và ngày đua bằng một thiết kế bền bỉ có thể được triển khai không chỉ ở vạch xuất phát của cuộc đua yêu thích mà còn trong những ngày và tháng sau cuộc chinh phục của bạn. Nó mang lại sự thoải mái và tin cậy nhưng với cảm giác đẩy sẽ giúp bạn cảm thấy nhanh chóng và sảng khoái. Sự linh hoạt đó không phổ biến ở đấu trường chạy. Nhưng ai nói bạn không thể có tất cả?',
    time: 'Oct 26, 2024'
  },
  {
    image: IMNew_2,
    title: 'Adidas sắp cho ra mẫu boost mới...',
    description:
      'Thu hẹp khoảng cách giữa hoạt động tập luyện cuối tuần và ngày đua bằng một thiết kế bền bỉ có thể được triển khai không chỉ ở vạch xuất phát của cuộc đua yêu thích mà còn trong những ngày và tháng sau cuộc chinh phục của bạn. Nó mang lại sự thoải mái và tin cậy nhưng với cảm giác đẩy sẽ giúp bạn cảm thấy nhanh chóng và sảng khoái. Sự linh hoạt đó không phổ biến ở đấu trường chạy. Nhưng ai nói bạn không thể có tất cả?',
    time: 'Oct 26, 2024'
  },
  {
    image: IMNew_3,
    title: 'Puma sắp cho ra mắt sản phẩm giày...',
    description:
      'Thu hẹp khoảng cách giữa hoạt động tập luyện cuối tuần và ngày đua bằng một thiết kế bền bỉ có thể được triển khai không chỉ ở vạch xuất phát của cuộc đua yêu thích mà còn trong những ngày và tháng sau cuộc chinh phục của bạn. Nó mang lại sự thoải mái và tin cậy nhưng với cảm giác đẩy sẽ giúp bạn cảm thấy nhanh chóng và sảng khoái. Sự linh hoạt đó không phổ biến ở đấu trường chạy. Nhưng ai nói bạn không thể có tất cả?',
    time: 'Oct 26, 2024'
  },
  {
    image: IMNew_4,
    title: 'Anta sắp cho ra mắt sản phẩm mới...',
    description:
      'Thu hẹp khoảng cách giữa hoạt động tập luyện cuối tuần và ngày đua bằng một thiết kế bền bỉ có thể được triển khai không chỉ ở vạch xuất phát của cuộc đua yêu thích mà còn trong những ngày và tháng sau cuộc chinh phục của bạn. Nó mang lại sự thoải mái và tin cậy nhưng với cảm giác đẩy sẽ giúp bạn cảm thấy nhanh chóng và sảng khoái. Sự linh hoạt đó không phổ biến ở đấu trường chạy. Nhưng ai nói bạn không thể có tất cả?',
    time: 'Oct 26, 2024'
  },
  {
    image: IMNew_5,
    title: 'Adidas sắp cho ra mắt sản phẩm mới...',
    description:
      'Thu hẹp khoảng cách giữa hoạt động tập luyện cuối tuần và ngày đua bằng một thiết kế bền bỉ có thể được triển khai không chỉ ở vạch xuất phát của cuộc đua yêu thích mà còn trong những ngày và tháng sau cuộc chinh phục của bạn. Nó mang lại sự thoải mái và tin cậy nhưng với cảm giác đẩy sẽ giúp bạn cảm thấy nhanh chóng và sảng khoái. Sự linh hoạt đó không phổ biến ở đấu trường chạy. Nhưng ai nói bạn không thể có tất cả?',
    time: 'Oct 26, 2024'
  }
]

export const New = () => {
  const queryParam = qs.parse(location.search)
  const page = queryParam?.page || 1

  const newList = useMemo(() => {
    return NEW_LIST?.slice(NUMBER_OF_PAGE * (+page - 1), NUMBER_OF_PAGE * +page)
  }, [page])
  return (
    <div className="container py-9 flex flex-col gap-8">
      <div className="grid grid-cols-3 gap-x-4 gap-y-16">
        {newList?.map((item, index) => {
          return <NewItem key={index} detail={item} />
        })}
      </div>
      <Pagination totalItems={NEW_LIST?.length} />
    </div>
  )
}
