"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { CircleX, Loader2, MessageCircleMore, Send } from "lucide-react";
import dynamic from "next/dynamic";
import { Spinner } from "./ui/spinner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import FeedbackProps from "@/interfaces/FeedbackProps";

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required!",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email is required!",
    })
    .email("Email is invalid!"),
  message: z.string().min(1, {
    message: "Message is required!",
  }),
});

const Turnstile = dynamic(
  () => import("next-turnstile").then((d) => d.Turnstile),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center m-2.5 h-15">
        <Spinner size="medium">Loading CAPTCHA...</Spinner>
      </div>
    ),
  }
);

const Feedback = (props: FeedbackProps) => {
  const [isFormDirty, setIsFormDirty] = useState<boolean>(false);
  const [turnstileVerified, setTurnstileVerified] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    if (!turnstileVerified) {
      toast("Please complete the captcha!");
      return;
    }
    const postData = {
      ...data,
      access_key: process.env.NEXT_PUBLIC_FORM_API_KEY,
    };

    setIsLoading(true);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(postData, null, 2),
    }).then(async (response) => {
      const json = await response.json();
      if (json.success) {
        toast("Message sent to me! <3");
        form.reset();
      } else {
        toast("An Error Occurred!" + json.message());
      }
      props.setOpen(false);
      setIsLoading(false);
    });
  };

  return (
    <Dialog open={props.open} onOpenChange={props.setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={() => props.setOpen(true)}
          aria-label="Send feedback"
          className="cursor-pointer"
        >
          <MessageCircleMore /> Feedback
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle className="m-2.5">Feedback</DialogTitle>
        <DialogDescription className="m-2.5">
          Please complete the form below to send me feedback. I appreciate your
          input and will do my best to respond as soon as possible.
        </DialogDescription>
        <Form {...form}>
          <form onChange={() => setIsFormDirty(true)}>
            <div className="flex flex-row">
              <div className="m-2.5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="m-2.5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="m-2.5">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {isFormDirty && (
              <div className="flex justify-center m-2.5 h-15">
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                  onVerify={() => setTurnstileVerified(true)}
                  onError={() => setTurnstileVerified(false)}
                  onExpire={() => setTurnstileVerified(false)}
                  theme={"dark"}
                />
              </div>
            )}
            <DialogFooter>
              <div className="flex flex-row justify-between w-full">
                <DialogClose asChild>
                  <Button
                    variant="secondary"
                    className="cursor-pointer m-2.5"
                    disabled={isLoading}
                    aria-label="Close Send Feedback Dialog"
                  >
                    <CircleX /> Close
                  </Button>
                </DialogClose>
                <Button
                  type="submit"
                  className="cursor-pointer m-2.5"
                  onClick={form.handleSubmit(onSubmit)}
                  disabled={isLoading}
                  aria-label="Submit Feedback"
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin mr-3" />
                  ) : (
                    <Send className="mr-3" />
                  )}
                  Submit
                </Button>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default Feedback;
