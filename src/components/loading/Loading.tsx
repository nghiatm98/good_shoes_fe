interface ILoadingComponentProps {
  className?: string;
}

export const LoadingComponent = ({ className = "" }: ILoadingComponentProps) => {
  return (
    <div
      className={`${className} text-main w-full h-full min-h-[200px] flex items-center justify-center`}
    >
      <div
        className="inline-block w-10 h-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-10 !w-10 !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};
