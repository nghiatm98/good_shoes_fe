import clsx from 'clsx'
import { Button } from 'components/button'
import { LoadingComponent } from 'components/loading'
import { OrderStatusModel, type HeaderTableModel } from 'models'
import React from 'react'

interface ITableProps {
  headerConfigs: HeaderTableModel[]
  data: any[]
  loading?: boolean
  isStepAction?: boolean
}

const rederOrderStatus = (item: any) => {
  switch (item.status as OrderStatusModel) {
    case OrderStatusModel.NEW:
      return {
        label: 'Xác nhận',
        value: OrderStatusModel.CONFIRMED
      }
    case OrderStatusModel.CONFIRMED:
      return {
        label: 'Đang tiến hành',
        value: OrderStatusModel.PROCESSING
      }
    case OrderStatusModel.PROCESSING:
      return {
        label: 'Hoàn thành',
        value: OrderStatusModel.COMPLETED
      }
    case OrderStatusModel.COMPLETED:
      return {
        label: 'Hủy',
        value: OrderStatusModel.CANCELED
      }
    default:
      return {
        label: 'Xác nhận',
        value: OrderStatusModel.CONFIRMED
      }
  }
}

export const Table = ({ headerConfigs = [], data = [], loading = false, isStepAction = false }: ITableProps) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headerConfigs.map((header, index) => {
              return (
                <th key={index} scope="col" className="px-6 py-3 text-center">
                  {header.label}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            data.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 justify-center items-center"
                >
                  {headerConfigs.map((header, idx) => {
                    return (
                      <td
                        key={idx}
                        className={clsx('px-6 py-4 text-center', {
                          'flex justify-center items-center gap-x-4': header.actions
                        })}
                      >
                        {!header.actions
                          ? item[header.field ?? '']
                          : header.actions.map((action) => {
                              return (
                                <Button
                                  key={idx}
                                  className="!h-8 !text-_10"
                                  label={isStepAction ? rederOrderStatus(item).label : action.label}
                                  onClick={() => action && action.onClick(item?.id, rederOrderStatus(item).value)}
                                />
                              )
                            })}
                      </td>
                    )
                  })}
                </tr>
              )
            })
          ) : (
            <tr>
              <td colSpan={headerConfigs.length}>
                <LoadingComponent />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
