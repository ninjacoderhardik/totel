import React, { useState } from "react";
import GoogleMap from "./GoogleMap";

const LandingMobile = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="relative bg-base-white w-full h-[100vh] overflow-hidden overflow-y-auto text-left text-[0.88rem] text-gray-700 font-text-l-semibold">
      <div className="absolute top-[0rem] left-[-0.06rem] flex flex-col items-start justify-start gap-[2.5rem]">
        <div className="flex flex-col items-start justify-start gap-[1.5rem]">
          <div className="flex flex-col items-start justify-start">
            <div className="overflow-hidden flex flex-col items-start justify-start gap-[2.5rem]">
              <div className="flex flex-col items-start justify-start">
                <div className="w-[100vw] flex flex-col items-start justify-start">
                  <div className="w-[100vw] flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-between">
                    <div className="flex flex-row items-center justify-center gap-[0.75rem]">
                      <img
                        className="relative w-[1.26rem] h-[1.75rem]"
                        alt=""
                        src="/union.svg"
                      />
                      <img
                        className="relative w-[3.2rem] h-[1.03rem]"
                        alt=""
                        src="/totel.svg"
                      />
                    </div>
                    <div className="rounded-81xl bg-system-background-light-secondary flex flex-row p-[0.5rem] items-center justify-center">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/menu.svg"
                      />
                    </div>
                  </div>
                  <div className="relative w-[100vw] h-[27.38rem]">
                    <img
                      className="absolute top-[0rem] left-[0.06rem] h-[27.38rem] w-[100vw] object-cover"
                      alt=""
                      src="/frame-1@2x.png"
                    />
                    <div className="absolute top-[1.19rem] left-[calc(50%_-_160.5px)] rounded-3xs bg-base-white w-[20rem] flex flex-row py-[2rem] px-[1.25rem] box-border items-center justify-center">
                      <div className="flex flex-col items-start justify-start gap-[1.88rem]">
                        <div className="rounded-xl flex flex-row items-start justify-start">
                          <div className="flex flex-col items-center justify-start gap-[0.63rem]">
                            <div className="relative w-[17.94rem] h-[4.75rem] shrink-0">
                              <div className="absolute top-[0rem] left-[0.03rem] text-[0.75rem] tracking-[-0.1px] leading-[1.25rem] font-medium flex items-center w-[3.13rem]">
                                Where
                              </div>
                              <div className="absolute top-[4.75rem] left-[0.03rem] tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden items-center w-[3.56rem] h-[1.25rem]">
                                Hint text
                              </div>
                              <div className="absolute top-[1.75rem] left-[0.03rem] rounded-81xl w-[17.81rem] flex flex-col items-start justify-center gap-[0.25rem]">
                                <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium hidden">
                                  Label
                                </div>
                                <input className="self-stretch rounded-81xl bg-base-white flex flex-row py-[0.75rem] px-[1.25rem] items-center justify-start gap-[0.75rem] text-[0.75rem] border-[1px] border-solid border-neutral-700 tracking-[-0.1px] leading-[1.5rem] font-medium " />
                                {/* <img
                                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                                    alt=""
                                    src="/placeholder.svg"
                                  /> */}
                                {/* <input className="flex-1 relative tracking-[-0.1px] leading-[1.5rem] font-medium" /> */}
                                {/* </div> */}
                                {/* <img
                                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                                    alt=""
                                    src="/calendar.svg"
                                  /> */}
                                {/* </div> */}
                                {/* <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden">
                                  Hint text
                                </div> */}
                              </div>
                            </div>
                            <div className="overflow-hidden flex flex-col items-start justify-center gap-[0.5rem]">
                              <div className="self-stretch relative text-[0.75rem] tracking-[-0.1px] leading-[1.25rem] font-medium">
                                From
                              </div>
                              <div className="self-stretch relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden items-center h-[1.25rem] shrink-0">
                                Hint text
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem]">
                                <div className="rounded-81xl flex flex-col items-start justify-center gap-[0.75rem]">
                                  <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium hidden">
                                    Label
                                  </div>
                                  <div className="rounded-81xl bg-base-white flex flex-row py-[0.75rem] px-[1.25rem] items-center justify-start gap-[1.5rem] text-[0.75rem] border-[1px] border-solid border-neutral-700">
                                    <img
                                      className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                                      alt=""
                                      src="/placeholder1.svg"
                                    />
                                    <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                                      04/13/2023
                                    </div>
                                    <img
                                      className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                                      alt=""
                                      src="/calendar1.svg"
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
                                  <div className="rounded-81xl bg-base-white flex flex-row py-[0.75rem] px-[1.25rem] items-center justify-start gap-[1.5rem] text-[0.75rem] border-[1px] border-solid border-neutral-700">
                                    <img
                                      className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                                      alt=""
                                      src="/placeholder1.svg"
                                    />
                                    <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                                      None
                                    </div>
                                    <img
                                      className="relative w-[1.5rem] h-[1.5rem]"
                                      alt=""
                                      src="/timeloading.svg"
                                    />
                                  </div>
                                  <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden">
                                    Hint text
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="w-[17.69rem] flex flex-col items-start justify-end">
                              <div className="overflow-hidden flex flex-col items-start justify-center gap-[0.5rem]">
                                <div className="self-stretch relative text-[0.75rem] tracking-[-0.1px] leading-[1.25rem] font-medium">
                                  Until
                                </div>
                                <div className="self-stretch relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden items-center h-[1.25rem] shrink-0">
                                  Hint text
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem]">
                                  <div className="rounded-81xl flex flex-col items-start justify-center gap-[0.75rem]">
                                    <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium hidden">
                                      Label
                                    </div>
                                    <div className="rounded-81xl bg-base-white flex flex-row py-[0.75rem] px-[1.25rem] items-center justify-start gap-[1.5rem] text-[0.75rem] border-[1px] border-solid border-neutral-700">
                                      <img
                                        className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                                        alt=""
                                        src="/placeholder1.svg"
                                      />
                                      <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                                        04/13/2023
                                      </div>
                                      <img
                                        className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                                        alt=""
                                        src="/calendar1.svg"
                                      />
                                    </div>
                                    <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden">
                                      Hint text
                                    </div>
                                  </div>
                                  <div className="rounded-81xl flex flex-col items-start justify-center gap-[1.44rem]">
                                    <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium hidden">
                                      Label
                                    </div>
                                    <div className="rounded-81xl bg-base-white flex flex-row py-[0.75rem] px-[1.25rem] items-center justify-start gap-[1.5rem] text-[0.75rem] border-[1px] border-solid border-neutral-700">
                                      <img
                                        className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                                        alt=""
                                        src="/placeholder1.svg"
                                      />
                                      <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                                        None
                                      </div>
                                      <img
                                        className="relative w-[1.5rem] h-[1.5rem]"
                                        alt=""
                                        src="/timeloading.svg"
                                      />
                                    </div>
                                    <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden">
                                      Hint text
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-81xl bg-default-systemblue-light w-[17.75rem] flex flex-row py-[0.88rem] px-[2rem] box-border items-center justify-center text-center text-[1.06rem] text-base-white font-default-bold-body">
                          <div className="flex flex-row items-center justify-center">
                            <div className="relative tracking-[-0.41px] leading-[1.38rem] font-semibold">
                              Search
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-[0rem] pr-[0rem] pl-[1.25rem] items-start justify-start text-[0.75rem] max-md:max-w-md max-md:overflow-x-auto ">
                <div className="flex flex-col items-center justify-start">
                  <div className="flex flex-row items-center justify-center gap-[0.44rem]">
                    <div className="flex flex-row items-center justify-center">
                      <div className="rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.31rem] px-[0.63rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/filter.svg"
                        />
                        <div className="relative leading-[1.38rem] font-semibold">
                          Price
                        </div>
                        <img
                          className="relative w-[0.75rem] h-[0.75rem] overflow-hidden shrink-0"
                          alt=""
                          src="/chevrondown.svg"
                        />
                      </div>
                    </div>
                    <div className="rounded-81xl w-32 bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.31rem] px-[0.63rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/filter.svg"
                      />
                      <div className="relative leading-[1.38rem] font-semibold">
                        Type of place
                      </div>
                      <img
                        className="relative w-[0.75rem] h-[0.75rem] overflow-hidden shrink-0"
                        alt=""
                        src="/chevrondown1.svg"
                      />
                    </div>
                    <div className="relative box-border w-[0.06rem] h-[1.06rem] border-r-[1px] border-solid border-neutral-700" />
                    <div className="flex flex-row items-start justify-start gap-[0.5rem] items-center text-center">
                      <div className="rounded-81xl w-32 bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.31rem] px-[0.75rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/filter.svg"
                        />
                        <div className="relative leading-[1.38rem] font-semibold w-32 whitespace-nowrap overflow-clip text-ellipsis">
                          Free Cancellation
                        </div>
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/chevrondown2.svg"
                        />
                      </div>
                      <div className="rounded-81xl w-16 bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.31rem] px-[0.75rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/filter.svg"
                        />
                        <div className="relative leading-[1.38rem] font-semibold">
                          Pet Lover
                        </div>
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/chevrondown2.svg"
                        />
                      </div>
                      <div className="rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.31rem] px-[0.75rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/filter.svg"
                        />
                        <div className="relative leading-[1.38rem] font-semibold">
                          Single
                        </div>
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/chevrondown2.svg"
                        />
                      </div>
                      <div className="rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.31rem] px-[0.75rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/filter.svg"
                        />
                        <div className="relative leading-[1.38rem] font-semibold">
                          Couples
                        </div>
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/chevrondown2.svg"
                        />
                      </div>
                      <div className="rounded-81xl w-20 bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.31rem] px-[0.75rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/filter.svg"
                        />
                        <div className="relative leading-[1.38rem] font-semibold">
                          Foot Baller
                        </div>
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/chevrondown2.svg"
                        />
                      </div>
                      <div className="rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.31rem] px-[0.75rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/filter.svg"
                        />
                        <div className="relative leading-[1.38rem] font-semibold">
                          Student
                        </div>
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/chevrondown2.svg"
                        />
                      </div>
                      <div className="rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.31rem] px-[0.75rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/filter.svg"
                        />
                        <div className="relative leading-[1.38rem] font-semibold">
                          Professional
                        </div>
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/chevrondown2.svg"
                        />
                      </div>
                      <div className="rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.31rem] px-[0.75rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
                        <img
                          className="relative w-[0.94rem] h-[0.94rem] overflow-hidden shrink-0"
                          alt=""
                          src="/filter1.svg"
                        />
                        <div className="relative leading-[1.38rem] font-semibold">
                          Filter
                        </div>
                        <img
                          className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/filter.svg"
                        />
                      </div>
                      <div
                        className="flex flex-row items-start justify-start w-32"
                        onClick={() => setShowMap(!showMap)}
                      >
                        <div className="rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.31rem] px-[0.63rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-neutral-700 cursor-pointer transition duration-500 hover:bg-purple-secondary-600 hover:text-white">
                          <img
                            className="relative w-[0.75rem] h-[0.75rem]"
                            alt=""
                            src="/map.svg"
                          />
                          <div className="relative leading-[1.38rem] font-semibold">
                            Show In Map
                          </div>
                          <img
                            className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                            alt=""
                            src="/filter.svg"
                          />
                        </div>
                      </div>

                      <div className="flex flex-row items-start justify-start w-24"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100vw] flex flex-col items-center justify-start gap-[1rem] text-[1.25rem] text-base-black">
            <div className="flex flex-col items-start justify-start gap-[1rem]">
              <div className="rounded-3xs bg-base-white box-border w-[20rem] overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                  alt=""
                  src="/rectangle-2@2x.png"
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
                        Looking for 1-2 roommates for a place in Manchester city
                        centre (wanting to move in around August time) but happy
                        to move in with more than that, I’m super easy going and
                        tidy.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder2.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                      <span>Looking Near:</span>
                      <span className="font-medium">{` Bristol, Bath & London`}</span>
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-base-white box-border w-[20rem] overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                  alt=""
                  src="/rectangle-1@2x.png"
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
                        Looking for 1-2 roommates for a place in Manchester city
                        centre (wanting to move in around August time) but happy
                        to move in with more than that, I’m super easy going and
                        tidy.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder2.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                      <span>Looking Near:</span>
                      <span className="font-medium">{` Bristol, Bath & London`}</span>
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-base-white box-border w-[20rem] overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                  alt=""
                  src="/rectangle-11@2x.png"
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
                        Looking for 1-2 roommates for a place in Manchester city
                        centre (wanting to move in around August time) but happy
                        to move in with more than that, I’m super easy going and
                        tidy.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder3.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                      <span>Looking Near:</span>
                      <span className="font-medium">{` Bristol, Bath & London`}</span>
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-base-white box-border w-[20rem] overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                  alt=""
                  src="/rectangle-21@2x.png"
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
                        Looking for 1-2 roommates for a place in Manchester city
                        centre (wanting to move in around August time) but happy
                        to move in with more than that, I’m super easy going and
                        tidy.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder3.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                      <span>Looking Near:</span>
                      <span className="font-medium">{` Bristol, Bath & London`}</span>
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1rem]">
              <div className="rounded-3xs bg-base-white box-border w-[20rem] overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                  alt=""
                  src="/rectangle-2@2x.png"
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
                        Looking for 1-2 roommates for a place in Manchester city
                        centre (wanting to move in around August time) but happy
                        to move in with more than that, I’m super easy going and
                        tidy.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder4.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                      <span>Looking Near:</span>
                      <span className="font-medium">{` Bristol, Bath & London`}</span>
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-base-white box-border w-[20rem] overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                  alt=""
                  src="/rectangle-1@2x.png"
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
                        Looking for 1-2 roommates for a place in Manchester city
                        centre (wanting to move in around August time) but happy
                        to move in with more than that, I’m super easy going and
                        tidy.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder5.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                      <span>Looking Near:</span>
                      <span className="font-medium">{` Bristol, Bath & London`}</span>
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-base-white box-border w-[20rem] overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                  alt=""
                  src="/rectangle-11@2x.png"
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
                          src="/status-icon3.svg"
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
                        Looking for 1-2 roommates for a place in Manchester city
                        centre (wanting to move in around August time) but happy
                        to move in with more than that, I’m super easy going and
                        tidy.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder6.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                      <span>Looking Near:</span>
                      <span className="font-medium">{` Bristol, Bath & London`}</span>
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-base-white box-border w-[20rem] overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                  alt=""
                  src="/rectangle-21@2x.png"
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
                          src="/status-icon4.svg"
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
                        Looking for 1-2 roommates for a place in Manchester city
                        centre (wanting to move in around August time) but happy
                        to move in with more than that, I’m super easy going and
                        tidy.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder4.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                      <span>Looking Near:</span>
                      <span className="font-medium">{` Bristol, Bath & London`}</span>
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1rem]">
              <div className="rounded-3xs bg-base-white box-border w-[20rem] overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                  alt=""
                  src="/rectangle-2@2x.png"
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
                        Looking for 1-2 roommates for a place in Manchester city
                        centre (wanting to move in around August time) but happy
                        to move in with more than that, I’m super easy going and
                        tidy.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder3.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                      <span>Looking Near:</span>
                      <span className="font-medium">{` Bristol, Bath & London`}</span>
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-base-white box-border w-[20rem] overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                  alt=""
                  src="/rectangle-1@2x.png"
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
                        Looking for 1-2 roommates for a place in Manchester city
                        centre (wanting to move in around August time) but happy
                        to move in with more than that, I’m super easy going and
                        tidy.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder3.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                      <span>Looking Near:</span>
                      <span className="font-medium">{` Bristol, Bath & London`}</span>
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-base-white box-border w-[20rem] overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                  alt=""
                  src="/rectangle-11@2x.png"
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
                        Looking for 1-2 roommates for a place in Manchester city
                        centre (wanting to move in around August time) but happy
                        to move in with more than that, I’m super easy going and
                        tidy.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder2.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                      <span>Looking Near:</span>
                      <span className="font-medium">{` Bristol, Bath & London`}</span>
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-base-white box-border w-[20rem] overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-700">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[17.81rem] shrink-0 object-cover"
                  alt=""
                  src="/rectangle-21@2x.png"
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
                        Looking for 1-2 roommates for a place in Manchester city
                        centre (wanting to move in around August time) but happy
                        to move in with more than that, I’m super easy going and
                        tidy.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem] text-gray-700">
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder2.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.38rem]">
                      <span>Looking Near:</span>
                      <span className="font-medium">{` Bristol, Bath & London`}</span>
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-81xl bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-[0.75rem] text-gray-700 border-[1px] border-solid border-neutral-700">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder2.svg"
              />
              <div className="relative leading-[1.38rem] font-semibold">
                Load More
              </div>
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder2.svg"
              />
            </div>
            {showMap && <div className="h-[360px]">{<GoogleMap />}</div>}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start text-center text-base-white">
          <div className="bg-purple-secondary-600 w-[100vw] flex flex-col py-[4rem] px-[0rem] box-border items-center justify-center">
            <div className="w-[20.06rem] flex flex-col items-center justify-start">
              <div className="w-[18.19rem] flex flex-col items-center justify-center gap-[0.5rem]">
                <div className="relative tracking-[-0.1px] leading-[1.25rem] font-semibold">
                  1% OF THE INDUSTRY
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[2rem] text-[1.5rem]">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[1rem]">
                    <div className="relative tracking-[-0.02em] leading-[2.5rem] font-semibold inline-block w-[18.19rem]">
                      Welcome to your room sharing platform that which You can
                      find places and stay with hotels and home-stays ranked by
                      travellers. What fun could we have more than having
                      roommate with similar interest.
                    </div>
                    <div className="self-stretch relative text-[1rem] tracking-[-0.1px] leading-[1.5rem] text-gray-50 whitespace-pre-wrap hidden">
                      <p className="m-0">
                        Let us help you take you from zero to serious business
                        and beyond.
                      </p>
                      <p className="m-0">
                        {" "}
                        Our no-strings attached free trial lets you test our
                        product today.
                      </p>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[1rem] text-[0.94rem] text-purple-secondary-600">
                    <div className="rounded-81xl bg-base-white overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem]">
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder7.svg"
                      />
                      <div className="relative leading-[1.38rem] font-semibold">
                        Get started
                      </div>
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder7.svg"
                      />
                    </div>
                    <div className="rounded-81xl bg-purple-secondary-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden hidden flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-base-white">
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder8.svg"
                      />
                      <div className="relative leading-[1.38rem] font-semibold">
                        Log in
                      </div>
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder8.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-left text-gray-700">
            <div className="bg-base-white flex flex-col py-[3.13rem] px-[0rem] items-center justify-start gap-[1.94rem]">
              <div className="w-[22.5rem] flex flex-row p-[0.63rem] box-border items-start justify-center">
                <div className="w-[12.38rem] flex flex-col items-start justify-start gap-[1.88rem]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                    <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                      <img
                        className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder9.svg"
                      />
                      <div className="relative tracking-[-0.1px] leading-[1.5rem] font-semibold">
                        Products
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder9.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-gray-50">
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                          Features
                        </div>
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                      </div>
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                          Integrations
                        </div>
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                      </div>
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                          Enterprise
                        </div>
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                      </div>
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                          Solutions
                        </div>
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-[1rem]">
                    <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                      <img
                        className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder9.svg"
                      />
                      <div className="relative tracking-[-0.1px] leading-[1.5rem] font-semibold">
                        Products
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder9.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[0.88rem] text-gray-50">
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                          Features
                        </div>
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                      </div>
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                          Integrations
                        </div>
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                      </div>
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                          Enterprise
                        </div>
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                      </div>
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                          Solutions
                        </div>
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                    <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                      <img
                        className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder9.svg"
                      />
                      <div className="relative tracking-[-0.1px] leading-[1.5rem] font-semibold">
                        Resources
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder9.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-gray-50">
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                          Partners
                        </div>
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                      </div>
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                          Developers
                        </div>
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                      </div>
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                          Community
                        </div>
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder10.svg"
                        />
                      </div>
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder11.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                          Apps
                        </div>
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder11.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.63rem]">
                    <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                      <img
                        className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder12.svg"
                      />
                      <div className="relative tracking-[-0.1px] leading-[1.5rem] font-semibold">
                        Company
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder12.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-gray-50">
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder11.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                          About Us
                        </div>
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder11.svg"
                        />
                      </div>
                      <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder11.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                          Careers
                        </div>
                        <img
                          className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder11.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                    <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.25rem]">
                      <img
                        className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder12.svg"
                      />
                      <div className="relative tracking-[-0.1px] leading-[1.5rem] font-semibold">
                        Mobile app
                      </div>
                      <img
                        className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 hidden cursor-pointer"
                        alt=""
                        src="/placeholder12.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                      <img
                        className="relative w-[7.5rem] h-[2.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/frame.svg"
                      />
                      <img
                        className="relative w-[8.44rem] h-[2.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/frame1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[13rem] flex flex-col items-start justify-start gap-[1.88rem] text-center text-[0.81rem] text-gray-50">
                <div className="flex flex-col py-[0.5rem] px-[0rem] items-start justify-center">
                  <div className="flex flex-row p-[0.63rem] items-center justify-center gap-[0.75rem] cursor-pointer">
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
                <div className="flex flex-row items-start justify-start gap-[1.5rem] cursor-pointer">
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
                    src="/social-platforms-logo3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMobile;
