export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      courses: {
        Row: {
          created_at: string
          description_en: string | null
          description_th: string | null
          difficulty_level: string | null
          duration_hours: number | null
          duration_weeks: number | null
          id: string
          image_url: string | null
          instructor_name: string | null
          is_premium: boolean | null
          lessons_count: number | null
          level: string | null
          preview_video_url: string | null
          price: number | null
          price_thb: number | null
          title_en: string
          title_th: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description_en?: string | null
          description_th?: string | null
          difficulty_level?: string | null
          duration_hours?: number | null
          duration_weeks?: number | null
          id?: string
          image_url?: string | null
          instructor_name?: string | null
          is_premium?: boolean | null
          lessons_count?: number | null
          level?: string | null
          preview_video_url?: string | null
          price?: number | null
          price_thb?: number | null
          title_en: string
          title_th: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description_en?: string | null
          description_th?: string | null
          difficulty_level?: string | null
          duration_hours?: number | null
          duration_weeks?: number | null
          id?: string
          image_url?: string | null
          instructor_name?: string | null
          is_premium?: boolean | null
          lessons_count?: number | null
          level?: string | null
          preview_video_url?: string | null
          price?: number | null
          price_thb?: number | null
          title_en?: string
          title_th?: string
          updated_at?: string
        }
        Relationships: []
      }
      feedback: {
        Row: {
          comment: string | null
          course_id: string | null
          created_at: string | null
          id: string
          is_public: boolean | null
          rating: number | null
          user_id: string | null
        }
        Insert: {
          comment?: string | null
          course_id?: string | null
          created_at?: string | null
          id?: string
          is_public?: boolean | null
          rating?: number | null
          user_id?: string | null
        }
        Update: {
          comment?: string | null
          course_id?: string | null
          created_at?: string | null
          id?: string
          is_public?: boolean | null
          rating?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "feedback_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          amount_thb: number | null
          completed_at: string | null
          course_id: string | null
          created_at: string | null
          currency: string | null
          id: string
          payment_method: string | null
          status: string | null
          stripe_session_id: string | null
          user_id: string | null
        }
        Insert: {
          amount_thb?: number | null
          completed_at?: string | null
          course_id?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          payment_method?: string | null
          status?: string | null
          stripe_session_id?: string | null
          user_id?: string | null
        }
        Update: {
          amount_thb?: number | null
          completed_at?: string | null
          course_id?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          payment_method?: string | null
          status?: string | null
          stripe_session_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      page_analytics: {
        Row: {
          conversion_event: string | null
          created_at: string
          device_type: string | null
          event_type: string
          id: string
          ip_address: unknown | null
          page_url: string | null
          referrer: string | null
          section: string | null
          session_id: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          conversion_event?: string | null
          created_at?: string
          device_type?: string | null
          event_type: string
          id?: string
          ip_address?: unknown | null
          page_url?: string | null
          referrer?: string | null
          section?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          conversion_event?: string | null
          created_at?: string
          device_type?: string | null
          event_type?: string
          id?: string
          ip_address?: unknown | null
          page_url?: string | null
          referrer?: string | null
          section?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      privacy_consents: {
        Row: {
          consent_type: string
          consented: boolean
          created_at: string | null
          id: string
          ip_address: unknown | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          consent_type: string
          consented: boolean
          created_at?: string | null
          id?: string
          ip_address?: unknown | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          consent_type?: string
          consented?: boolean
          created_at?: string | null
          id?: string
          ip_address?: unknown | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          age: number | null
          created_at: string | null
          id: string
          language_preference: string | null
          name: string | null
          occupation: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          age?: number | null
          created_at?: string | null
          id: string
          language_preference?: string | null
          name?: string | null
          occupation?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          age?: number | null
          created_at?: string | null
          id?: string
          language_preference?: string | null
          name?: string | null
          occupation?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      promotional_content: {
        Row: {
          content_en: string | null
          content_th: string | null
          content_type: string
          conversion_rate: number | null
          created_at: string | null
          id: string
          is_active: boolean | null
          variant_name: string
        }
        Insert: {
          content_en?: string | null
          content_th?: string | null
          content_type: string
          conversion_rate?: number | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          variant_name: string
        }
        Update: {
          content_en?: string | null
          content_th?: string | null
          content_type?: string
          conversion_rate?: number | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          variant_name?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          age: number | null
          course_completed: string | null
          course_taken: string | null
          created_at: string
          id: string
          image_url: string | null
          is_featured: boolean | null
          name_en: string | null
          name_th: string
          occupation: string | null
          quote_en: string | null
          quote_th: string
          rating: number | null
          video_url: string | null
        }
        Insert: {
          age?: number | null
          course_completed?: string | null
          course_taken?: string | null
          created_at?: string
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          name_en?: string | null
          name_th: string
          occupation?: string | null
          quote_en?: string | null
          quote_th: string
          rating?: number | null
          video_url?: string | null
        }
        Update: {
          age?: number | null
          course_completed?: string | null
          course_taken?: string | null
          created_at?: string
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          name_en?: string | null
          name_th?: string
          occupation?: string | null
          quote_en?: string | null
          quote_th?: string
          rating?: number | null
          video_url?: string | null
        }
        Relationships: []
      }
      user_courses: {
        Row: {
          completed_at: string | null
          course_id: string | null
          enrolled_at: string | null
          id: string
          payment_status: string | null
          progress_percentage: number | null
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          course_id?: string | null
          enrolled_at?: string | null
          id?: string
          payment_status?: string | null
          progress_percentage?: number | null
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          course_id?: string | null
          enrolled_at?: string | null
          id?: string
          payment_status?: string | null
          progress_percentage?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_courses_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      user_inquiries: {
        Row: {
          course_interest: string | null
          created_at: string
          email: string
          id: string
          language_preference: string | null
          message: string | null
          name: string | null
          phone: string | null
        }
        Insert: {
          course_interest?: string | null
          created_at?: string
          email: string
          id?: string
          language_preference?: string | null
          message?: string | null
          name?: string | null
          phone?: string | null
        }
        Update: {
          course_interest?: string | null
          created_at?: string
          email?: string
          id?: string
          language_preference?: string | null
          message?: string | null
          name?: string | null
          phone?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
