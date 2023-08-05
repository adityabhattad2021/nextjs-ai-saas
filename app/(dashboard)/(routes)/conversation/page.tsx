"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Heading from "@/components/heading";
import { MessageSquareIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ConversationPage() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    })

    const isLoading = form.formState.isSubmitting;

    async function onSubmit(value: z.infer<typeof formSchema>) {
        console.log(value);

    }

    return (
        <div>
            <Heading
                title="Conversion"
                description="Not your famous GPT Model."
                icon={MessageSquareIcon}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="
                                rounded-lg
                                border
                                w-full
                                p-4
                                md:px-6
                                focus-within:shadow-sm
                                grid
                                grid-cols-12
                                gap-2
                            "
                        >
                            <FormField
                                name="prompt"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="col-span-12 lg:col-span-10">
                                            <FormControl className="m-0 p-0">
                                                <Input
                                                    className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                                    disabled={isLoading}
                                                    placeholder="How do I calculate the radius of the circle..."
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )
                                }}
                            />
                            <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
                                Generate
                            </Button>
                        </form>
                    </Form>
                    <div className="space-y-4 mt-4">
                        Messages Content
                    </div>
                </div>
            </div>
        </div>
    )
}