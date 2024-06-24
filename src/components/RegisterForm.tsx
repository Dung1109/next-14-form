"use client";

import { TUser, UserSchema } from "@/lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRef } from "react";
import { onFormAction } from "./actions";
import { useFormState } from "react-dom";

export default function RegisterForm() {
    const userForm = useForm<FormData>({
        resolver: zodResolver(UserSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            age: 5,
        },
    });

    const formRef = useRef<HTMLFormElement>(null);

    const [state, formAction] = useFormState(onFormAction, {});

    return (
        <Form {...userForm}>
            <form
                onSubmit={userForm.handleSubmit(() =>
                    formRef.current?.submit()
                )}
                action={formAction}
                className="space-y-8"
                ref={formRef}
            >
                <div>{state?.message}</div>
                <ul>
                    {state?.issues?.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <FormField
                    control={userForm.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={userForm.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your email address.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={userForm.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                Please use a strong password.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={userForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                Please confirm your password.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={userForm.control}
                    name="age"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Age</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="shadcn"
                                    {...field}
                                    type="number"
                                />
                            </FormControl>
                            <FormDescription>
                                Please enter your age.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
