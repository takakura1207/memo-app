import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://hglwlygkdqaixouxykol.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnbHdseWdrZHFhaXhvdXh5a29sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwODg3NzksImV4cCI6MjA0MjY2NDc3OX0.hEL5W3yaCnOB8ugU6SUPh16glb20dKOq1ayeomlxmQU';

export const supabase = createClient(supabaseUrl, supabaseKey);