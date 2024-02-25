import { Footer } from "./Footer.tsx";

const LayoutFooter = () => {
  return (
    <div className={`layout-footer px-4 py-5`}>
      <div className={"flex items-center justify-center"}>
        <div className={"basis-full md:basis-auto md:hidden"}>
          <Footer />
        </div>
        <div className={"basis-full md:basis-auto"}>
          <div className={`flex justify-end items-center`}>
            <div
              className={
                "basis-auto text-[#7B818D] text-[12px] font-medium pe-4"
              }
            >
              Sponsored by
            </div>
            <div className={"basis-auto"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <g clip-path="url(#clip0_299_288)">
                  <path
                    d="M13.8915 11.6634L15.9266 13.8005L13.9707 15.5854C13.9707 15.5854 12.7307 17.0461 11.0028 15.1718C9.2748 13.2974 4.03247 7.87748 4.03247 7.87748L10.5091 2.10352L12.4274 4.09338L7.99908 8.02653L12.6233 12.7925L13.8915 11.6616V11.6634Z"
                    fill="#1A1818"
                  />
                  <path
                    d="M20.027 10.1822C18.5628 11.4995 16.522 13.2918 16.522 13.2918L14.4888 11.1622L17.6772 8.32836L16.3807 6.98129L13.2338 9.80399L11.2722 7.86629L14.5095 4.99515L11.1572 1.51661C11.1572 1.51661 11.8582 0.907358 12.2973 0.495597C13.2715 -0.417355 13.7256 0.0148998 14.7262 1.10672C16.1094 2.61402 19.1055 5.54292 20.4265 7.07072C20.9409 7.66693 21.493 8.86495 20.0289 10.1822H20.027Z"
                    fill="#0EC6C6"
                  />
                  <path
                    d="M0 20.8713H1.60549V23.4592H6.20901V20.1185H0V18.5777H6.61604C6.78375 18.5777 6.94015 18.6075 7.08902 18.669C7.23788 18.7305 7.36414 18.8106 7.46966 18.9131C7.57519 19.0137 7.6581 19.1329 7.72028 19.2708C7.78247 19.4087 7.81262 19.5503 7.81262 19.6975V23.8542C7.81262 24.02 7.78247 24.1728 7.72028 24.3125C7.6581 24.4541 7.57707 24.5734 7.47343 24.6759C7.36979 24.7783 7.25107 24.8566 7.11163 24.9143C6.97219 24.9721 6.82897 25.0019 6.68011 25.0019H0V20.8731V20.8713Z"
                    fill="#0EC6C6"
                  />
                  <path
                    d="M9.48413 19.7235C9.48413 19.5577 9.51428 19.4049 9.57646 19.2652C9.63865 19.1254 9.71968 19.0043 9.82332 18.9019C9.92507 18.8012 10.0457 18.7211 10.1851 18.6634C10.3246 18.6056 10.4678 18.5758 10.6166 18.5758H16.7145V20.1166H11.0915V23.4573H16.7145V24.9981H10.6807C10.513 24.9981 10.3566 24.9683 10.2077 24.9069C10.0589 24.8454 9.93261 24.7653 9.82709 24.6628C9.72156 24.5622 9.63865 24.4429 9.57646 24.305C9.51428 24.1672 9.48413 24.0256 9.48413 23.8784V19.7217V19.7235Z"
                    fill="#0EC6C6"
                  />
                  <path
                    d="M18.4763 19.7235C18.4763 19.5577 18.5065 19.4049 18.5687 19.2652C18.6308 19.1254 18.7119 19.0043 18.8155 18.9019C18.9173 18.8012 19.0379 18.7211 19.1773 18.6634C19.3167 18.6056 19.46 18.5758 19.6088 18.5758H25V20.1166H20.0818V21.5941H24.2576V23.135H20.0818V24.9981H18.4763V19.7217V19.7235Z"
                    fill="#0EC6C6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_299_288">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LayoutFooter };
