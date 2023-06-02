import React, { useState } from "react";
import GoogleMap from "./GoogleMap";

const LandingDesktop = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="relative w-full flex flex-col items-center justify-start text-left text-[0.88rem] text-base-black font-text-l-regular">
      <div className="self-stretch bg-base-white overflow-hidden flex flex-col py-[1rem] px-[0rem] items-center justify-center">
        <div className="self-stretch flex flex-row py-[0rem] px-[7.75rem] items-center justify-start gap-[0.75rem]">
          <div className="flex-1 flex flex-col items-start justify-center">
            <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.75rem]">
              <img
                className="relative w-[1.26rem] h-[1.75rem]"
                alt=""
                src="/union.svg"
              />
              <img
                className="relative w-[3.2rem] h-[1.03rem] mt-[2px]"
                alt=""
                src="/totel.svg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-start gap-[0.75rem]">
            <div className="flex-1 rounded-81xl overflow-hidden flex flex-row py-[0.63rem] px-[1rem] items-center justify-center gap-[0.38rem]">
              <img
                className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder.svg"
              />
              <div className="relative leading-[1.25rem] font-semibold">
                Inbox
              </div>
              <img
                className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder.svg"
              />
            </div>
            <div className="flex-1 rounded-81xl overflow-hidden flex flex-row py-[0.63rem] px-[1rem] items-center justify-center gap-[0.38rem]">
              <img
                className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder42.svg"
              />
              <div className="relative leading-[1.25rem] font-semibold">
                Wishlist
              </div>
              <img
                className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder42.svg"
              />
            </div>
            <div className="flex-1 rounded-81xl overflow-hidden flex flex-row py-[0.63rem] px-[1rem] items-center justify-center gap-[0.38rem]">
              <img
                className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder1.svg"
              />
              <div className="relative leading-[1.25rem] font-semibold">
                Reservation
              </div>
              <img
                className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder1.svg"
              />
            </div>
            <div className="flex-1 rounded-81xl overflow-hidden flex flex-row py-[0.63rem] px-[1rem] items-center justify-center gap-[0.38rem]">
              <img
                className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder.svg"
              />
              <div className="relative leading-[1.25rem] font-semibold">
                Lisiting
              </div>
              <img
                className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder.svg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-between text-[0.94rem] text-gray-700">
            <div className="rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder2.svg"
              />
              <div className="relative leading-[1.38rem] font-semibold ">
                Create Post
              </div>
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder3.svg"
              />
            </div>
            <div className="rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] box-border w-[3rem] h-[3rem] flex flex-row items-center justify-center border-[1px] border-solid border-neutral-700 cursor-pointer">
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/ringnotification1.svg"
              />
            </div>
            <div className="rounded-31xl w-[3.13rem] h-[3.13rem] flex flex-row items-center justify-center relative bg-[url(/avatar1@3x.png)] bg-cover bg-no-repeat bg-[top] cursor-pointer">
              <img
                className="absolute my-0 mx-[!important] top-[2.13rem] left-[2.13rem] w-[1rem] h-[1rem] hidden z-[0]"
                alt=""
                src="/status-icon12.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch overflow-y-auto flex flex-col items-start justify-start text-gray-700 overflow-x-hidden">
        <div className="self-stretch flex flex-col py-[0.75rem] px-[7.75rem] items-end justify-center bg-[url(/frame-12@3x.png)] bg-cover bg-no-repeat bg-[top]">
          <div className="self-stretch rounded-3xl bg-base-white flex flex-col p-[2rem] items-start justify-center border-[1px] border-solid border-neutral-700">
            <div className="self-stretch flex flex-row items-end justify-start gap-[1.5rem]">
              <div className="flex-1 overflow-hidden flex flex-col items-start justify-center gap-[0.5rem]">
                <div className="self-stretch relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                  Where
                </div>
                <div className="self-stretch relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden items-center h-[1.25rem] shrink-0">
                  Hint text
                </div>
                <div className="self-stretch rounded-81xl flex flex-col items-start justify-center gap-[0.25rem]">
                  <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium hidden">
                    Label
                  </div>
                  <input
                    placeholder="Location"
                    className="self-stretch rounded-81xl bg-base-white flex flex-row py-[0.75rem] px-[1.25rem] items-center justify-start gap-[0.75rem] text-[1rem] border-[1px] border-solid border-neutral-700"
                  />

                  <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden">
                    Hint text
                  </div>
                </div>
              </div>
              <div className="overflow-hidden flex flex-col items-start justify-center gap-[0.5rem]">
                <div className="self-stretch relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                  Budget
                </div>
                <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden items-center w-[3.56rem] h-[1.25rem] shrink-0">
                  Hint text
                </div>
                <div className="w-[14.5rem] flex flex-row items-start justify-start gap-[0.5rem]">
                  <div className="flex-1 rounded-81xl flex flex-col items-start justify-center gap-[0.25rem]">
                    <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium hidden">
                      Label
                    </div>
                    <div className="rounded-81xl bg-base-white flex flex-row py-[0.75rem] px-[1.25rem] items-center justify-start gap-[0.75rem] text-[1rem] border-[1px] border-solid border-neutral-700">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder4.svg"
                      />
                      <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                        Minimum
                      </div>
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/chevronexpand-verical1.svg"
                      />
                    </div>
                    <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden">
                      Hint text
                    </div>
                  </div>
                  <div className="flex-1 rounded-81xl flex flex-col items-start justify-center gap-[0.25rem]">
                    <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium hidden">
                      Label
                    </div>
                    <div className="rounded-81xl bg-base-white flex flex-row py-[0.75rem] px-[1.25rem] items-center justify-start gap-[0.75rem] text-[1rem] border-[1px] border-solid border-neutral-700">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder4.svg"
                      />
                      <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                        Maximum
                      </div>
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/chevronexpand-verical1.svg"
                      />
                    </div>
                    <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden">
                      Hint text
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden flex flex-col items-start justify-center gap-[0.5rem]">
                <div className="self-stretch relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                  Type
                </div>
                <div className="self-stretch relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden items-center h-[1.25rem] shrink-0">
                  Hint text
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem]">
                  <div className="rounded-81xl flex flex-col items-start justify-center gap-[0.75rem]">
                    <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium hidden">
                      Label
                    </div>
                    <div className="rounded-81xl bg-base-white flex flex-row py-[0.75rem] px-[1.25rem] items-center justify-start gap-[1.5rem] text-[1rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder4.svg"
                      />
                      <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                        Male
                      </div>
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] hidden"
                        alt=""
                        src="/timeloading2.svg"
                      />
                    </div>
                    <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden">
                      Hint text
                    </div>
                  </div>
                  <div className="rounded-81xl flex flex-col items-start justify-center gap-[0.75rem]">
                    <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium hidden">
                      Label
                    </div>
                    <div className="rounded-81xl bg-base-white flex flex-row py-[0.75rem] px-[1.25rem] items-center justify-start gap-[1.5rem] text-[1rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder4.svg"
                      />
                      <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                        Female
                      </div>
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/calendar.svg"
                      />
                    </div>
                    <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden">
                      Hint text
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-81xl bg-purple-secondary-600 w-[2.88rem] overflow-hidden shrink-0 flex flex-row p-[0.75rem] box-border items-center justify-center">
                <img
                  className="relative w-[1.38rem] h-[1.38rem] overflow-hidden shrink-0"
                  alt=""
                  src="/zoomsearch1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[1rem] text-[0.94rem] text-gray-700 m-auto mt-[24px]">
          <div className="flex-1 flex flex-row items-center justify-start gap-[0.5rem] ">
            <div className="rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/filter.svg"
              />
              <div className="relative leading-[1.38rem] font-semibold">
                Price
              </div>
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src="/chevrondown2.svg"
              />
            </div>
            <div className="rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/filter1.svg"
              />
              <div className="relative leading-[1.38rem] font-semibold">
                Gender
              </div>
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src="/chevrondown2.svg"
              />
            </div>
          </div>
          <div className="flex-1 relative box-border h-[1.06rem] border-r-[1px] border-solid border-neutral-700" />
          <div className="flex-1 flex flex-row items-start justify-start gap-[0.5rem] items-center text-center">
            <div className="flex-1 rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/filter2.svg"
              />
              <div className="relative leading-[1.38rem] font-semibold whitespace-nowrap overflow-clip text-ellipsis">
                Free Cancellation
              </div>
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className="flex-1 rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/filter3.svg"
              />
              <div className="relative leading-[1.38rem] font-semibold whitespace-nowrap overflow-clip text-ellipsis">
                Pet Lover
              </div>
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/chevrondown4.svg"
              />
            </div>
            <div className="flex-1 rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/filter4.svg"
              />
              <div className="relative leading-[1.38rem] font-semibold whitespace-nowrap overflow-clip text-ellipsis">
                Single
              </div>
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/chevrondown1.svg"
              />
            </div>
            <div className="flex-1 rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/filter5.svg"
              />
              <div className="relative leading-[1.38rem] font-semibold whitespace-nowrap overflow-clip text-ellipsis">
                Couples
              </div>
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/chevrondown3.svg"
              />
            </div>
            <div className="flex-1 rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/filter9.svg"
              />
              <div className="relative leading-[1.38rem] font-semibold whitespace-nowrap overflow-clip text-ellipsis">
                Foot Baller
              </div>
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/chevrondown4.svg"
              />
            </div>
            <div className="flex-1 rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/filter6.svg"
              />
              <div className="relative leading-[1.38rem] font-semibold w-12 whitespace-nowrap overflow-clip text-ellipsis">
                Student
              </div>
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/chevrondown5.svg"
              />
            </div>
            <div className="flex-1 rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/filter5.svg"
              />
              <div className="relative leading-[1.38rem] font-semibold whitespace-nowrap overflow-clip text-ellipsis">
                Professional
              </div>
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/chevrondown3.svg"
              />
            </div>
            <div className="flex-1 rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src="/filter7.svg"
              />
              <div className="relative leading-[1.38rem] font-semibold">
                Filter
              </div>
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/filter7.svg"
              />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start">
              <div
                onClick={() => setShowMap(!showMap)}
                className={`rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white ${
                  showMap ? "bg-purple-secondary-600 text-white" : ""
                }`}
              >
                <img
                  className="relative w-[1.25rem] h-[1.25rem]"
                  alt=""
                  src="/map.svg"
                />
                <div className="relative leading-[1.38rem] font-semibold whitespace-nowrap overflow-clip text-ellipsis">
                  Show In Map
                </div>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/filter8.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`${showMap ? "flex" : ""}`}>
          <div
            className={`  bg-base-white flex flex-col pt-[1.5rem] pb-[4rem]  items-center gap-[1.5rem] text-primary-600 ${
              showMap
                ? "pl-6 pr-6 max-h-[690px] align-baseline align-unset items-baseline overflow-y-auto"
                : "pr-[7.5rem] pl-[7.75rem] self-center justify-center"
            } `}
          >
            {/* <div className="self-stretch relative tracking-[-0.1px] leading-[1.25rem] font-semibold hidden h-[1.25rem] shrink-0">
          1% OF THE INDUSTRY
        </div> */}

            <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] text-[1.25rem] text-base-black">
              <div
                className={`w-[100%] flex flex-row items-center justify-center gap-[2rem]`}
              >
                {!showMap && (
                  <div className="flex-1 rounded-3xs bg-base-white overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                    <img
                      className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                      alt=""
                      src="/rectangle-23@2x.png"
                    />
                    <div className="self-stretch flex flex-col p-[1rem] items-start justify-start gap-[1rem]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                        <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                          <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                            <div className="relative leading-[1.75rem] font-semibold">
                              Devid Johanson
                            </div>
                            <img
                              className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                              alt=""
                              src="/status-icon.svg"
                            />
                          </div>
                          <div className="w-[16.5rem] flex flex-row items-start justify-start gap-[0.25rem] text-[0.88rem]">
                            <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                              23 Years
                            </div>
                            <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                              /
                            </div>
                            <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                              Male
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start text-[0.88rem] text-gray-50">
                          <div className="flex-1 relative tracking-[-0.1px] leading-[1.25rem]">
                            Looking for 1-2 roommates for a place in Manchester
                            city centre (wanting to move in around August time)
                            but happy to move in with more than that, I’m super
                            easy going and tidy.
                          </div>
                        </div>
                      </div>
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder27.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                          <span>Looking Near:</span>
                          <span className="font-medium">{` Bristol, Bath & London`}</span>
                        </div>
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/arrowright6.svg"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex-1 rounded-3xs bg-base-white overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                    alt=""
                    src="/rectangle-14@2x.png"
                  />
                  <div className="self-stretch flex flex-col p-[1rem] items-start justify-start gap-[1rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.75rem] font-semibold">
                            Devid Johanson
                          </div>
                          <img
                            className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/status-icon1.svg"
                          />
                        </div>
                        <div className="w-[16.5rem] flex flex-row items-start justify-start gap-[0.25rem] text-[0.88rem]">
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            23 Years
                          </div>
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            /
                          </div>
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            Male
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start text-[0.88rem] text-gray-50">
                        <div className="flex-1 relative tracking-[-0.1px] leading-[1.25rem]">
                          Looking for 1-2 roommates for a place in Manchester
                          city centre (wanting to move in around August time)
                          but happy to move in with more than that, I’m super
                          easy going and tidy.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder28.svg"
                      />
                      <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                        <span>Looking Near:</span>
                        <span className="font-medium">{` Bristol, Bath & London`}</span>
                      </div>
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/arrowright7.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-base-white overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                    alt=""
                    src="/rectangle-15@2x.png"
                  />
                  <div className="self-stretch flex flex-col p-[1rem] items-start justify-start gap-[1rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.75rem] font-semibold">
                            Devid Johanson
                          </div>
                          <img
                            className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/status-icon1.svg"
                          />
                        </div>
                        <div className="w-[16.5rem] flex flex-row items-start justify-start gap-[0.25rem] text-[0.88rem]">
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            23 Years
                          </div>
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            /
                          </div>
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            Male
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start text-[0.88rem] text-gray-50">
                        <div className="flex-1 relative tracking-[-0.1px] leading-[1.25rem]">
                          Looking for 1-2 roommates for a place in Manchester
                          city centre (wanting to move in around August time)
                          but happy to move in with more than that, I’m super
                          easy going and tidy.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder29.svg"
                      />
                      <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                        <span>Looking Near:</span>
                        <span className="font-medium">{` Bristol, Bath & London`}</span>
                      </div>
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/arrowright8.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-base-white overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                    alt=""
                    src="/rectangle-24@2x.png"
                  />
                  <div className="self-stretch flex flex-col p-[1rem] items-start justify-start gap-[1rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.75rem] font-semibold">
                            Devid Johanson
                          </div>
                          <img
                            className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/status-icon2.svg"
                          />
                        </div>
                        <div className="w-[16.5rem] flex flex-row items-start justify-start gap-[0.25rem] text-[0.88rem]">
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            23 Years
                          </div>
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            /
                          </div>
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            Male
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start text-[0.88rem] text-gray-50">
                        <div className="flex-1 relative tracking-[-0.1px] leading-[1.25rem]">
                          Looking for 1-2 roommates for a place in Manchester
                          city centre (wanting to move in around August time)
                          but happy to move in with more than that, I’m super
                          easy going and tidy.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder30.svg"
                      />
                      <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                        <span>Looking Near:</span>
                        <span className="font-medium">{` Bristol, Bath & London`}</span>
                      </div>
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/arrowright8.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`w-[100%] flex flex-row items-center justify-center gap-[2rem]`}
              >
                {!showMap && (
                  <div className="flex-1 rounded-3xs bg-base-white overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                    <img
                      className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                      alt=""
                      src="/rectangle-23@2x.png"
                    />
                    <div className="self-stretch flex flex-col p-[1rem] items-start justify-start gap-[1rem]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                        <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                          <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                            <div className="relative leading-[1.75rem] font-semibold">
                              Devid Johanson
                            </div>
                            <img
                              className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                              alt=""
                              src="/status-icon.svg"
                            />
                          </div>
                          <div className="w-[16.5rem] flex flex-row items-start justify-start gap-[0.25rem] text-[0.88rem]">
                            <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                              23 Years
                            </div>
                            <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                              /
                            </div>
                            <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                              Male
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start text-[0.88rem] text-gray-50">
                          <div className="flex-1 relative tracking-[-0.1px] leading-[1.25rem]">
                            Looking for 1-2 roommates for a place in Manchester
                            city centre (wanting to move in around August time)
                            but happy to move in with more than that, I’m super
                            easy going and tidy.
                          </div>
                        </div>
                      </div>
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder27.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                          <span>Looking Near:</span>
                          <span className="font-medium">{` Bristol, Bath & London`}</span>
                        </div>
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/arrowright6.svg"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex-1 rounded-3xs bg-base-white overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                    alt=""
                    src="/rectangle-14@2x.png"
                  />
                  <div className="self-stretch flex flex-col p-[1rem] items-start justify-start gap-[1rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.75rem] font-semibold">
                            Devid Johanson
                          </div>
                          <img
                            className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/status-icon1.svg"
                          />
                        </div>
                        <div className="w-[16.5rem] flex flex-row items-start justify-start gap-[0.25rem] text-[0.88rem]">
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            23 Years
                          </div>
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            /
                          </div>
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            Male
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start text-[0.88rem] text-gray-50">
                        <div className="flex-1 relative tracking-[-0.1px] leading-[1.25rem]">
                          Looking for 1-2 roommates for a place in Manchester
                          city centre (wanting to move in around August time)
                          but happy to move in with more than that, I’m super
                          easy going and tidy.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder28.svg"
                      />
                      <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                        <span>Looking Near:</span>
                        <span className="font-medium">{` Bristol, Bath & London`}</span>
                      </div>
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/arrowright7.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-base-white overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                    alt=""
                    src="/rectangle-15@2x.png"
                  />
                  <div className="self-stretch flex flex-col p-[1rem] items-start justify-start gap-[1rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.75rem] font-semibold">
                            Devid Johanson
                          </div>
                          <img
                            className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/status-icon1.svg"
                          />
                        </div>
                        <div className="w-[16.5rem] flex flex-row items-start justify-start gap-[0.25rem] text-[0.88rem]">
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            23 Years
                          </div>
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            /
                          </div>
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            Male
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start text-[0.88rem] text-gray-50">
                        <div className="flex-1 relative tracking-[-0.1px] leading-[1.25rem]">
                          Looking for 1-2 roommates for a place in Manchester
                          city centre (wanting to move in around August time)
                          but happy to move in with more than that, I’m super
                          easy going and tidy.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder29.svg"
                      />
                      <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                        <span>Looking Near:</span>
                        <span className="font-medium">{` Bristol, Bath & London`}</span>
                      </div>
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/arrowright8.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-base-white overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                    alt=""
                    src="/rectangle-24@2x.png"
                  />
                  <div className="self-stretch flex flex-col p-[1rem] items-start justify-start gap-[1rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.75rem] font-semibold">
                            Devid Johanson
                          </div>
                          <img
                            className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/status-icon2.svg"
                          />
                        </div>
                        <div className="w-[16.5rem] flex flex-row items-start justify-start gap-[0.25rem] text-[0.88rem]">
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            23 Years
                          </div>
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            /
                          </div>
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            Male
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start text-[0.88rem] text-gray-50">
                        <div className="flex-1 relative tracking-[-0.1px] leading-[1.25rem]">
                          Looking for 1-2 roommates for a place in Manchester
                          city centre (wanting to move in around August time)
                          but happy to move in with more than that, I’m super
                          easy going and tidy.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder30.svg"
                      />
                      <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                        <span>Looking Near:</span>
                        <span className="font-medium">{` Bristol, Bath & London`}</span>
                      </div>
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/arrowright8.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`w-[100%] flex flex-row items-center justify-center gap-[2rem]`}
              >
                {!showMap && (
                  <div className="flex-1 rounded-3xs bg-base-white overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                    <img
                      className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                      alt=""
                      src="/rectangle-23@2x.png"
                    />
                    <div className="self-stretch flex flex-col p-[1rem] items-start justify-start gap-[1rem]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                        <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                          <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                            <div className="relative leading-[1.75rem] font-semibold">
                              Devid Johanson
                            </div>
                            <img
                              className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                              alt=""
                              src="/status-icon.svg"
                            />
                          </div>
                          <div className="w-[16.5rem] flex flex-row items-start justify-start gap-[0.25rem] text-[0.88rem]">
                            <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                              23 Years
                            </div>
                            <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                              /
                            </div>
                            <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                              Male
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start text-[0.88rem] text-gray-50">
                          <div className="flex-1 relative tracking-[-0.1px] leading-[1.25rem]">
                            Looking for 1-2 roommates for a place in Manchester
                            city centre (wanting to move in around August time)
                            but happy to move in with more than that, I’m super
                            easy going and tidy.
                          </div>
                        </div>
                      </div>
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder27.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                          <span>Looking Near:</span>
                          <span className="font-medium">{` Bristol, Bath & London`}</span>
                        </div>
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/arrowright6.svg"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex-1 rounded-3xs bg-base-white overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                    alt=""
                    src="/rectangle-14@2x.png"
                  />
                  <div className="self-stretch flex flex-col p-[1rem] items-start justify-start gap-[1rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.75rem] font-semibold">
                            Devid Johanson
                          </div>
                          <img
                            className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/status-icon1.svg"
                          />
                        </div>
                        <div className="w-[16.5rem] flex flex-row items-start justify-start gap-[0.25rem] text-[0.88rem]">
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            23 Years
                          </div>
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            /
                          </div>
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            Male
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start text-[0.88rem] text-gray-50">
                        <div className="flex-1 relative tracking-[-0.1px] leading-[1.25rem]">
                          Looking for 1-2 roommates for a place in Manchester
                          city centre (wanting to move in around August time)
                          but happy to move in with more than that, I’m super
                          easy going and tidy.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder28.svg"
                      />
                      <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                        <span>Looking Near:</span>
                        <span className="font-medium">{` Bristol, Bath & London`}</span>
                      </div>
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/arrowright7.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-base-white overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                    alt=""
                    src="/rectangle-15@2x.png"
                  />
                  <div className="self-stretch flex flex-col p-[1rem] items-start justify-start gap-[1rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.75rem] font-semibold">
                            Devid Johanson
                          </div>
                          <img
                            className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/status-icon1.svg"
                          />
                        </div>
                        <div className="w-[16.5rem] flex flex-row items-start justify-start gap-[0.25rem] text-[0.88rem]">
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            23 Years
                          </div>
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            /
                          </div>
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            Male
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start text-[0.88rem] text-gray-50">
                        <div className="flex-1 relative tracking-[-0.1px] leading-[1.25rem]">
                          Looking for 1-2 roommates for a place in Manchester
                          city centre (wanting to move in around August time)
                          but happy to move in with more than that, I’m super
                          easy going and tidy.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder29.svg"
                      />
                      <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                        <span>Looking Near:</span>
                        <span className="font-medium">{` Bristol, Bath & London`}</span>
                      </div>
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/arrowright8.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xs bg-base-white overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                    alt=""
                    src="/rectangle-24@2x.png"
                  />
                  <div className="self-stretch flex flex-col p-[1rem] items-start justify-start gap-[1rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                          <div className="relative leading-[1.75rem] font-semibold">
                            Devid Johanson
                          </div>
                          <img
                            className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
                            alt=""
                            src="/status-icon2.svg"
                          />
                        </div>
                        <div className="w-[16.5rem] flex flex-row items-start justify-start gap-[0.25rem] text-[0.88rem]">
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            23 Years
                          </div>
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            /
                          </div>
                          <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                            Male
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start text-[0.88rem] text-gray-50">
                        <div className="flex-1 relative tracking-[-0.1px] leading-[1.25rem]">
                          Looking for 1-2 roommates for a place in Manchester
                          city centre (wanting to move in around August time)
                          but happy to move in with more than that, I’m super
                          easy going and tidy.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder30.svg"
                      />
                      <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                        <span>Looking Near:</span>
                        <span className="font-medium">{` Bristol, Bath & London`}</span>
                      </div>
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/arrowright8.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center text-[0.94rem] text-gray-700">
                <div className="rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700">
                  <img
                    className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder31.svg"
                  />
                  <div className="relative leading-[1.38rem] font-semibold cursor-pointer">
                    Load More
                  </div>
                  <img
                    className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder31.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          {showMap && (
            <div className="pt-[1.5rem] h-screen">{<GoogleMap />}</div>
          )}
        </div>

        <div className="self-stretch bg-purple-secondary-600 flex flex-col py-[4rem] px-[0rem] items-start justify-center text-base-white">
          <div className="w-[94.5rem] flex flex-col py-[0rem] px-[2rem] box-border items-center justify-center">
            <div className="w-[80rem] flex flex-col items-start justify-center gap-[0.5rem]">
              <div className="relative tracking-[-0.1px] leading-[1.25rem] font-semibold">
                1% OF THE INDUSTRY
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] text-[2rem]">
                <div className="self-stretch flex flex-col items-start justify-center gap-[1rem]">
                  <div className="self-stretch relative tracking-[-0.02em] leading-[2.5rem] font-semibold">
                    Welcome to your room sharing platform that which You can
                    find places and stay with hotels and home-stays ranked by
                    travellers. What fun could we have more than having roommate
                    with similar interest.
                  </div>
                  <div className="self-stretch relative text-[1rem] tracking-[-0.1px] leading-[1.5rem] text-gray-50 whitespace-pre-wrap text-center hidden">
                    <p className="m-0">
                      Let us help you take you from zero to serious business and
                      beyond.
                    </p>
                    <p className="m-0">
                      {" "}
                      Our no-strings attached free trial lets you test our
                      product today.
                    </p>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[1rem] text-center text-[0.94rem] text-purple-secondary-600">
                  <div className="rounded-81xl bg-base-white overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem]">
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder32.svg"
                    />
                    <div className="relative leading-[1.38rem] font-semibold cursor-pointer">
                      Get started
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder32.svg"
                    />
                  </div>
                  <div className="rounded-81xl bg-purple-secondary-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden hidden flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-base-white">
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder33.svg"
                    />
                    <div className="relative leading-[1.38rem] font-semibold">
                      Log in
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder33.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-base-white flex flex-col py-[2.5rem] px-[0rem] items-center justify-start text-[1rem]">
          <div className="w-[80rem] flex flex-col items-start justify-start gap-[4rem]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[5rem]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                  <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder34.svg"
                  />
                  <div className="relative tracking-[-0.1px] leading-[1.5rem] font-semibold">
                    Products
                  </div>
                  <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder34.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-gray-50">
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem] cursor-pointer">
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder35.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                      Features
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder35.svg"
                    />
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem] cursor-pointer">
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder35.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                      Integrations
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder35.svg"
                    />
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem] cursor-pointer">
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder35.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                      Enterprise
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder35.svg"
                    />
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem] cursor-pointer">
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder35.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                      Solutions
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder35.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem] cursor-pointer">
                  <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder36.svg"
                  />
                  <div className="relative tracking-[-0.1px] leading-[1.5rem] font-semibold">
                    Products
                  </div>
                  <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder36.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-gray-50 cursor-pointer">
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder37.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                      Features
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder37.svg"
                    />
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem] cursor-pointer">
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder37.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                      Integrations
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder37.svg"
                    />
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem] cursor-pointer">
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder37.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                      Enterprise
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder37.svg"
                    />
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem] cursor-pointer">
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder37.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                      Solutions
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder37.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem] cursor-pointer">
                  <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder38.svg"
                  />
                  <div className="relative tracking-[-0.1px] leading-[1.5rem] font-semibold">
                    Resources
                  </div>
                  <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder38.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-gray-50">
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem] cursor-pointer">
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder39.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                      Partners
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder39.svg"
                    />
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem] cursor-pointer">
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder39.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                      Developers
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder39.svg"
                    />
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem] cursor-pointer">
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder39.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                      Community
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder39.svg"
                    />
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem] cursor-pointer">
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder39.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                      Apps
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder39.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem] cursor-pointer">
                  <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder38.svg"
                  />
                  <div className="relative tracking-[-0.1px] leading-[1.5rem] font-semibold">
                    Company
                  </div>
                  <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder40.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-gray-50">
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem] cursor-pointer">
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder39.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                      About Us
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder41.svg"
                    />
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem] cursor-pointer">
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder39.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                      Careers
                    </div>
                    <img
                      className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder39.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                  <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/placeholder40.svg"
                  />
                  <div className="relative tracking-[-0.1px] leading-[1.5rem] font-semibold">
                    Mobile app
                  </div>
                  <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden cursor-pointer"
                    alt=""
                    src="/placeholder40.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] cursor-pointer">
                  <img
                    className="relative w-[7.5rem] h-[2.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/frame.svg"
                  />
                  <img
                    className="relative w-[8.44rem] h-[2.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/frame5.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between text-center text-gray-50">
              <div className="flex flex-col py-[0.5rem] px-[0rem] items-start justify-center">
                <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.75rem]">
                  <img
                    className="relative w-[1.41rem] h-[1.75rem]"
                    alt=""
                    src="/union1.svg"
                  />
                  <img
                    className="relative w-[3.2rem] h-[1.03rem]"
                    alt=""
                    src="/totel1.svg"
                  />
                </div>
              </div>
              <div className="relative tracking-[-0.1px] leading-[1.5rem]">
                © 2023 Totel. All Rights Reserved.
              </div>
              <div className="flex flex-row items-start justify-start gap-[1.5rem]">
                <img
                  className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 cursor-pointer"
                  alt=""
                  src="/social-platforms-logo.svg"
                />
                <img
                  className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 cursor-pointer"
                  alt=""
                  src="/social-platforms-logo1.svg"
                />
                <img
                  className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 cursor-pointer"
                  alt=""
                  src="/social-platforms-logo2.svg"
                />
                <img
                  className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 cursor-pointer"
                  alt=""
                  src="/social-platforms-logo5.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingDesktop;
