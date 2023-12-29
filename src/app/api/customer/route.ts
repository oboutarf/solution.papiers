import { supabase } from "@/utils/supabase/supabase.server.client";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {

    const form = await req.formData();
    const form_data = JSON.parse(form.get('form') as string||'');

    const check_customer = await supabase
        .from('customer')
        .select('*')
        .eq('email', form_data.email);
    if (check_customer.error || !check_customer.data)
        return (
            console.log(check_customer.error),
            NextResponse.json({
                ok: false,
                response: null,
                error: null
            }, {
                status: 400
            })
        );
    if (check_customer.data.length)
        return (
            NextResponse.json({
                ok: false,
                response: null,
                error: null
            }, {
                status: 400
            })
        );

    const add_customer = await supabase
        .from('customer')
        .insert({
            first_name: form_data.first_name,
            last_name: form_data.last_name,
            email: form_data.email,
            phone: form_data.phone,
            type: form_data.type
        });
    if (add_customer.error)
        return (
            console.log(add_customer.error),
            NextResponse.json({
                ok: false,
                response: null,
                error: null
            }, {
                status: 400
            })
        );

    return (
        NextResponse.json({
            ok: true,
            response: null,
            error: null
        }, {
            status: 201
        })
    );
};
