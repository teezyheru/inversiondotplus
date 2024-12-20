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
      assessments: {
        Row: {
          created_at: string | null
          fatigue_level: number | null
          id: string
          primary_stressors: string[] | null
          recommendations: string[] | null
          stress_level: number | null
          user_id: string | null
          work_life_balance: number | null
        }
        Insert: {
          created_at?: string | null
          fatigue_level?: number | null
          id?: string
          primary_stressors?: string[] | null
          recommendations?: string[] | null
          stress_level?: number | null
          user_id?: string | null
          work_life_balance?: number | null
        }
        Update: {
          created_at?: string | null
          fatigue_level?: number | null
          id?: string
          primary_stressors?: string[] | null
          recommendations?: string[] | null
          stress_level?: number | null
          user_id?: string | null
          work_life_balance?: number | null
        }
        Relationships: []
      }
      burnout_alerts: {
        Row: {
          action_items: string[] | null
          alert_type: string
          created_at: string | null
          description: string
          id: string
          resolved_at: string | null
          risk_level: number | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          action_items?: string[] | null
          alert_type: string
          created_at?: string | null
          description: string
          id?: string
          resolved_at?: string | null
          risk_level?: number | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          action_items?: string[] | null
          alert_type?: string
          created_at?: string | null
          description?: string
          id?: string
          resolved_at?: string | null
          risk_level?: number | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      employee_profiles: {
        Row: {
          created_at: string | null
          id: string
          organization_id: string | null
          role: string
          shift_pattern: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          organization_id?: string | null
          role: string
          shift_pattern?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          organization_id?: string | null
          role?: string
          shift_pattern?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employee_profiles_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      exercises: {
        Row: {
          created_at: string | null
          id: string
          name: string
          notes: string | null
          reps: number | null
          sets: number | null
          weight: number | null
          workout_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          notes?: string | null
          reps?: number | null
          sets?: number | null
          weight?: number | null
          workout_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          notes?: string | null
          reps?: number | null
          sets?: number | null
          weight?: number | null
          workout_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "exercises_workout_id_fkey"
            columns: ["workout_id"]
            isOneToOne: false
            referencedRelation: "workouts"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          created_at: string | null
          id: string
          name: string
          subscription_status: string | null
          subscription_tier:
            | Database["public"]["Enums"]["subscription_tier"]
            | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          subscription_status?: string | null
          subscription_tier?:
            | Database["public"]["Enums"]["subscription_tier"]
            | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          subscription_status?: string | null
          subscription_tier?:
            | Database["public"]["Enums"]["subscription_tier"]
            | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          id: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          id: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          id?: string
          username?: string | null
        }
        Relationships: []
      }
      shifts: {
        Row: {
          created_at: string | null
          end_time: string
          fatigue_risk_level: number | null
          id: string
          notes: string | null
          shift_type: string
          start_time: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          end_time: string
          fatigue_risk_level?: number | null
          id?: string
          notes?: string | null
          shift_type: string
          start_time: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          end_time?: string
          fatigue_risk_level?: number | null
          id?: string
          notes?: string | null
          shift_type?: string
          start_time?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      team_analytics: {
        Row: {
          created_at: string | null
          id: string
          measurement_period: unknown
          metric_type: string
          metric_value: number | null
          organization_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          measurement_period: unknown
          metric_type: string
          metric_value?: number | null
          organization_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          measurement_period?: unknown
          metric_type?: string
          metric_value?: number | null
          organization_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_analytics_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      workouts: {
        Row: {
          created_at: string | null
          date: string | null
          duration: number | null
          id: string
          notes: string | null
          title: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          date?: string | null
          duration?: number | null
          id?: string
          notes?: string | null
          title: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string | null
          duration?: number | null
          id?: string
          notes?: string | null
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workouts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      subscription_tier: "basic" | "pro" | "enterprise"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
