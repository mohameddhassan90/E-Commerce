"use client";
import { ChangePassword } from "@/apis/setting/changepassword";
import { ChangePasswordSchema } from "@/apis/setting/schema/changepassword.schema";
import { UpdateUserDataSchema } from "@/apis/setting/schema/updateuserdata.schema";
import { updateUserData } from "@/apis/setting/updateuserdata";
import { NewPasswordInterface, NewUpdateUserDataInterface } from "@/interfaces/newpassword.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ProfileSetting() {
  const router =useRouter()
// update user data
 const { register:registerUpUpdateUserData, handleSubmit:handleSubmitUpdateUserData } = useForm({
    resolver:zodResolver(UpdateUserDataSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const {data,error,mutate:mutateUpdateUserData,isPending:isPendingUpdateUserData}=useMutation({
    mutationFn:updateUserData,
    onSuccess:()=>{
        toast.success("Password Changed successfully", {
        position: "top-center",
        style: { backgroundColor: "#16A34A", color: "#fff" },
      });
      router.push("/signin")
    },
   onError:(error)=>{
    toast.error("Must Be New Data", {
            position: "top-center",
            style: { backgroundColor: "#DC2626", color: "#fff" },
          });
   }
  }) 
  
// changepassword
  const { register:registerChangePassword, handleSubmit:handleSubmitChangePassword } = useForm<NewPasswordInterface>({
    resolver:zodResolver(ChangePasswordSchema),
    defaultValues: {
      currentPassword: "",
      password: "",
      rePassword: "",
    },
  });

  const {mutate:mutateChangePassword,isPending:isPendingChangePassword}=useMutation({
    mutationFn:ChangePassword,
    onSuccess:()=>{
        toast.success("Informatin Updated Succesfully", {
        position: "top-center",
        style: { backgroundColor: "#16A34A", color: "#fff" },
      });
      router.push("/signin")
    },
   onError:(error)=>{
    toast.error(error?.message, {
            position: "top-center",
            style: { backgroundColor: "#DC2626", color: "#fff" },
          });
   }
  })

  function handleFormUpdateUserData(formData: NewUpdateUserDataInterface) {
    
    mutateUpdateUserData(formData)
  }
  function handleFormChangePassword(formData: NewPasswordInterface) {
    mutateChangePassword(formData)
  }
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
        <div className="container mx-auto px-4 py-10 sm:py-12">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link
              className="hover:text-white transition-colors duration-200"
              href="/"
            >
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">My Account</span>
          </nav>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
              <svg
                width={25}
                data-prefix="fas"
                data-icon="user"
                className="svg-inline--fa fa-user text-3xl"
                role="img"
                viewBox="0 0 448 512"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                My Account
              </h1>
              <p className="text-white/80 mt-1">
                Manage your addresses and account settings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <aside className="w-full lg:w-72 shrink-0">
            <nav className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h2 className="font-bold text-gray-900">My Account</h2>
              </div>
              <ul className="p-2">
                <li>
                  <Link
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    href="/profile/adress"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                      <svg
                        width={15}
                        data-prefix="fas"
                        data-icon="location-dot"
                        className="svg-inline--fa fa-location-dot text-sm"
                        role="img"
                        viewBox="0 0 384 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"
                        />
                      </svg>
                    </div>
                    <span className="font-medium flex-1">My Addresses</span>
                    <svg
                      width={15}
                      data-prefix="fas"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right text-xs transition-transform text-gray-400"
                      role="img"
                      viewBox="0 0 320 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group bg-green-50 text-green-700"
                    href="/profile/setting"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-green-500 text-white">
                      <svg
                        width={15}
                        data-prefix="fas"
                        data-icon="gear"
                        className="svg-inline--fa fa-gear text-sm"
                        role="img"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"
                        />
                      </svg>
                    </div>
                    <span className="font-medium flex-1">Settings</span>
                    <svg
                      width={15}
                      data-prefix="fas"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right text-xs transition-transform text-green-500"
                      role="img"
                      viewBox="0 0 320 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="flex-1 min-w-0">
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Account Settings
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Update your profile information and change your password
                </p>
              </div>
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 sm:p-8 border-b border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                      <svg
                        width={20}
                        data-prefix="fas"
                        data-icon="user"
                        className="svg-inline--fa fa-user text-2xl text-green-600"
                        role="img"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Profile Information
                      </h3>
                      <p className="text-sm text-gray-500">
                        Update your personal details
                      </p>
                    </div>
                  </div>
                  {/* form userData */}
                  <form
                    onSubmit={handleSubmitUpdateUserData(handleFormUpdateUserData)}
                    className="space-y-5"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                        required
                        type="text"
                        {...registerUpUpdateUserData("name")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                        required
                        type="email"
                        {...registerUpUpdateUserData("email")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        placeholder="01xxxxxxxxx"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                        required
                        type="tel"
                        {...registerUpUpdateUserData("phone")}
                      />
                    </div>
                    <div className="pt-4">
                      <button
                        disabled={isPendingUpdateUserData}
                        type="submit"
                        className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 shadow-lg shadow-green-600/25"
                      >
                        <svg
                          width={15}
                          data-prefix="fas"
                          data-icon="floppy-disk"
                          className="svg-inline--fa fa-floppy-disk"
                          role="img"
                          viewBox="0 0 448 512"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm32 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                          />
                        </svg>
                        {isPendingUpdateUserData?"Sending...":"Save Changes"}
                      </button>
                    </div>
                  </form>
                </div>
                <div className="p-6 sm:p-8 bg-gray-50">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Account Information
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">User ID</span>
                      <span className="font-mono text-gray-700">
                        69cd4e26460be8e0dbc878b2
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Role</span>
                      <span className="px-3 py-1 rounded-lg bg-green-100 text-green-700 font-medium capitalize">
                        user
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
                      <svg
                        width={20}
                        data-prefix="fas"
                        data-icon="lock"
                        className="svg-inline--fa fa-lock text-2xl text-amber-600"
                        role="img"
                        viewBox="0 -30 384 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Change Password
                      </h3>
                      <p className="text-sm text-gray-500">
                        Update your account password
                      </p>
                    </div>
                  </div>
                  {/* form change password */}
                  <form onSubmit={handleSubmitChangePassword(handleFormChangePassword)} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                      </label>
                      <div className="relative">
                        <input
                          placeholder="Enter your current password"
                          className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                          required
                          type="password"
                          {...registerChangePassword("currentPassword")}
                        />
                        <button
                          type="button"
                          className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          <svg
                            width={15}
                            data-prefix="fas"
                            data-icon="eye"
                            className="svg-inline--fa fa-eye"
                            role="img"
                            viewBox="0 0 576 512"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                      </label>
                      <div className="relative">
                        <input
                          placeholder="Enter your new password"
                          className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                          required
                          minLength={6}
                          type="password"
                          {...registerChangePassword("password")}
                        />
                        <button
                          type="button"
                          className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          <svg
                            width={15}
                            data-prefix="fas"
                            data-icon="eye"
                            className="svg-inline--fa fa-eye"
                            role="img"
                            viewBox="0 0 576 512"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"
                            />
                          </svg>
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Must be at least 6 characters
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <input
                          placeholder="Confirm your new password"
                          className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                          required
                          type="password"
                          {...registerChangePassword("rePassword")}
                        />
                        <button
                          type="button"
                          className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          <svg
                            width={15}
                            data-prefix="fas"
                            data-icon="eye"
                            className="svg-inline--fa fa-eye"
                            role="img"
                            viewBox="0 0 576 512"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="pt-4">
                      <button
                        disabled={isPendingChangePassword}
                        type="submit"
                        className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors disabled:opacity-50 shadow-lg shadow-amber-600/25"
                      >
                        <svg
                          width={15}
                          data-prefix="fas"
                          data-icon="lock"
                          className="svg-inline--fa fa-lock"
                          role="img"
                          viewBox="0 -30 384 512"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"
                          />
                        </svg>
                        {isPendingChangePassword?"Sending...":"Change Password"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
